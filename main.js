function BOT(){
	this.trade = new function tradeProcess(){
		this.fine = function(method, type, target){
			
			var current =  this.data[target];
			var fine = [];
			for(var planet in current){
				if(current[planet][method] != -1){
					if(!fine[0]){ fine[0] = current[planet]; continue;}
					if(type == 'max'){
						if(current[planet][method] > fine[0][method]) fine = [current[planet]];
						else if(current[planet][method] == fine[0][method]) fine.push(current[planet]);
					}
					if(type == 'min'){
						if(current[planet][method] < fine[0][method]) fine = [current[planet]];
						else if(current[planet][method] == fine[0][method]) fine.push(current[planet]);
					}
				}
			}
			return fine;
		}
		this.buy = function(target){
			return this.fine('buy','min', target);
		}
		this.sell = function(target){
			return this.fine('sell','max', target);
		}
		this.stop = function(){
			clearInterval(this.interval);
		}
		this.data = {};
		this.interval = setInterval(
			(function(){
				var land = document.querySelector('#fse-land-dialog');
				if(land){
					var planet = land.querySelector('.jxDialogTitle .jxDialogLabel');
					if(!planet.innerHTML) return;
					var trade = land.querySelector('#landing-trade');
					if(!trade) return;
					var mater = trade.querySelector('#landing-trade-shp');
					if(!mater) return;
					var time = new Date();
					for(var i=1; i < 14; ++i){
						var cur_mat = mater.querySelector('#s'+i);
						var buy = cur_mat.querySelector('#is'+i+'sell');
						var sell = cur_mat.querySelector('#is'+i+'buy');
						var count = cur_mat.querySelector('#is'+i+'c');
						this.data[i] = this.data[i] || {};
						this.data[i][planet.innerHTML] = {
							planet: planet.innerHTML,
							sell: sell.innerHTML.replace('кр.','').replace(/\s/,'').replace('профицит','-1')*1,
							buy: buy.innerHTML.replace('кр.','').replace(/\s/,'').replace('дефицит','-1')*1,
							count: count.innerHTML*1,
							time: time
						}
					}
				}
			}).bind(this)
		,1000);
	};
	this.grind = new function grindProcess(){
		var grind = this;
		this.state = {};
		var callback = fsE.tachyon.connection._transport.ws.onmessage;
		fsE.tachyon.connection._transport.ws.onmessage = function(ev){callback(ev);grind.callback(ev);}
		this.player = fsE.objA[fsE.player.pid];
		this.space = document.querySelector('#space');
		this.coords = new function Coords(){
			this.update = function(x,y){
				grind.player.x = x;
				grind.player.y = y;
			}
			this.vector = function(){
				return {x:grind.player.x,y:grind.player.y}
			}
		};
		this.actions = new function(){
			for(var button in fsE.actions_set.buttons){
				this[button] = fsE.actions_set.buttons[button]
				if(!this[button].options || !this[button].options.id) continue;
				this[button] = this[button].options.id;	
				this[button] = this[button].substr(7,this[button].length-7);				
			}
			console.log(this);
		};
		this.callback = function(ev){
			var data;
			try{data = JSON.parse(ev.data.replace(/^a\[(.*)\]$/,'$1'));}
			catch(ex){
				if(ev.data!='h') console.log(ex,ev);
			}
			
			if(data){
				this.processor[data.type] && this.processor[data.type](data.eval);
				!this.processor[data.type] && console.log(data);
			}
		}	
		this.processor = {
			'i': function(eval){
				console.log('Checked new element',eval)
			},
			'o': function(eval){
				console.log(eval);
			},
			'm': function(eval){
				if(eval.oid == grind.player.oid){
					var speed = fsE.player.speed*100;
					var point = grind.coords.vector();
					var delay = Math.sqrt(Math.pow(point.x-eval.posx,2)+Math.pow(point.y-eval.posy,2))/speed+1;
					if(grind.state['moveToArea']){
						setTimeout(function(){
							grind.inArea(grind.state['moveToArea'].target,grind.state['moveToArea'].callback)},
						delay*1000);
					}
					grind.coords.update(eval.posx,eval.posy)
				}
			},
		}
		this.next = function(){
			if(fsE.active){
				fsE.active = '';
			}
			fsE.selectNearest();
			if(fsE.active){
				var active = fsE.objA[fsE.active];
				if(active.otype == 'a'
				|| active.otype == 'i'
				|| active.otype == 'dh'){
					grind.inArea(active,function(){
							fsE.firetoobject(fsE.active,grind.actions[active.otype == 'i'?1:0]);
							setTimeout(function fire(){
								if(fsE.active && fsE.active == active.oid && fsE.objA[active.oid]){
									fsE.firetoobject(fsE.active,grind.actions[0]);
									setTimeout(fire,1500);
								}
								else{
									grind.next();
								}
							},2000)
						}
					);
				}
				else{
					fsE.active = '';
					setTimeout(function(){grind.next();},2000);
				}
			}
			else{
				grind.inArea({x:5000,y:5000},function(){
					setTimeout(function(){grind.next();},5000);
				})
			}
		}
		this.inArea = function(active,callback){
			var radius = Math.pow(active.x-grind.player.x,2)
					   + Math.pow(active.y-grind.player.y,2);
			if(radius < Math.pow(300,2)){
				callback && callback();
				if(grind.state['moveToArea']){
					grind.state['moveToArea'] = null;
				}
				return true;
			}
			else{
				grind.moveToArea(active,callback);
				return false;
			}
		}
		this.moveToArea = function(active, callback){
			grind.state['moveToArea'] = {callback:callback,target:active};
			var locX = grind.player.x - active.x,
				locY = grind.player.y - active.y,
				locZ = Math.sqrt(locX*locX+locY*locY),
				absX = active.x+100*(locX/locZ),
				absY = active.y+100*(locY/locZ);		
			fsE.flyto({point:{x: absX,y:absY}});		
		}
		this.simulate = (function(){
			function simulate(element, eventName){
				var options = extend(defaultOptions, arguments[2] || {});
				var oEvent, eventType = null;
			
				for (var name in eventMatchers)
				{
					if (eventMatchers[name].test(eventName)) { eventType = name; break; }
				}
			
				if (!eventType)
					throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');
			
				if (document.createEvent)
				{
					oEvent = document.createEvent(eventType);
					if (eventType == 'HTMLEvents')
					{
						oEvent.initEvent(eventName, options.bubbles, options.cancelable);
					}
					else if(eventType == 'KeyboardEvents'){
						oEvent.initKeyboardEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
						options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.keyCode,options.charCode);
					
						}
					else
					{
						oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
						options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
						options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
					}
					element.dispatchEvent(oEvent);
				}
				else
				{
					options.clientX = options.pointerX;
					options.clientY = options.pointerY;
					var evt = document.createEventObject();
					oEvent = extend(evt, options);
					element.fireEvent('on' + eventName, oEvent);
				}
				return element;
			}
			function extend(destination, source) {
				for (var property in source)
				destination[property] = source[property];
				return destination;
			}
			var eventMatchers = {
				'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
				'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/,
				'KeyboardEvents': /^(?:key(?:down|press|up))$/
			}
			var defaultOptions = {
				pointerX: 0,
				pointerY: 0,
				button: 0,
				ctrlKey: false,
				altKey: false,
				shiftKey: false,
				metaKey: false,
				bubbles: true,
				cancelable: true
			}
			return simulate;
		})();
		
	};
}
var bot = new BOT();
