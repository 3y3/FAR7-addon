﻿function BOT(){
	var D = document,
		W = window,
		AC = 'appendChild',
		CE = 'createElement',
		RC = 'removeChild',
		QS = 'querySelector',
		ST = 'style',
		SA = 'setAttribute',
		AE = 'addEventListener',
		RE = 'removeEventListener',
		HT = 'innerHTML';
	this.trade = new function tradeProcess(){		
		var trade = this;
		this.interface = new function(){
			var S = this;
			var far = D[QS]('#far-interface');
			var commbar = D[QS]('#commbar');
			var cC = commbar[QS]('.jxBarContainer');
			var TC = D[CE]('div');
			var tradeSrc = 
				'<span class="jxButtonContainer" id="addon-trade-button">'
					+'<a class="jxButton jxButtonFlyout jxDiscloser" target="" href="javascript:void(0);" title="Информация по лучшим ценам на ресурсы с посещенных вами планет." alt="Информация по лучшим ценам на ресурсы с посещенных вами планет.">'
						+'<span class="jxButtonContent">'
							+'<img class="jxButtonIcon" src="http://game.far7.by/static/img/u/a_pixel.png" title="Информация по лучшим ценам на ресурсы с посещенных вами планет." alt="Информация по лучшим ценам на ресурсы с посещенных вами планет." style="background-image: url(http://game.far7.by/static/img/u/icon-trade.png);"/>'
							+'<span class="jxButtonLabel" style="">'
								+'<div id="addon-trade">Торговля</div>'
				+'</span></span></a></span>';
			TC[HT] = tradeSrc;
			var tB = S['TradeButton'] = TC[QS]('#addon-trade-button');
				tB[AE]('click', dd, false);
			cC[AC](tB);
			commbar[ST].width = '1000px';
			
			var rect = tB.getClientRects()[0];
			
			var tDsrc =
				'<div id="addon-trade-panel" class="jxFlyout jxHasChrome" style="left: '+(rect.left - 5)+'px; top: 25px; z-index: 1000;width: 670px; height: 375px;display: none;">'
					+'<div class="jxFlyoutContent"></div>'
					+'<div class="jxChrome" style="padding: 0px; background-image: none; z-index: -1;"><div class="jxChromeTR"><img class="png24" src="http://game.far7.by/static/img/u/chrome-flyout.png" alt="" title=""></div><div class="jxChromeTL"><img class="png24" src="http://game.far7.by/static/img/u/chrome-flyout.png" alt="" title=""></div><div class="jxChromeBL"><img class="png24" src="http://game.far7.by/static/img/u/chrome-flyout.png" alt="" title=""></div><div class="jxChromeBR"><img class="png24" src="http://game.far7.by/static/img/u/chrome-flyout.png" alt="" title=""></div></div>'
				+'</div>';
			
			TC[HT] = tDsrc;			
			var tD = S['TradeDialog'] = TC[QS]('#addon-trade-panel');
			far[AC](tD);
			
			var tDCsrc = '<div id="landing-trade"><div id="landing-trade-shp"><div id="s1" class="s1 trade"><img id="is1" isid="1" src="/static/img/i/r/tore.png" class="dragable animopa itemtip iundefined is1 shopitem" slot="s1" itype="i" useit="0" subtype="tore" lvl="0" cls="" price="100" title="" style="top: 1px; left: 1px; margin: 0px; position: relative;"><div id="is1c" class="count is1c" style="visibility: visible;">-</div><div id="is1sell" class="count sellprice is1sell"></div><div id="is1buy" class="count buyprice is1buy"></div><div id="is1arrow" class="tradearrow arrow0"></div></div><div id="s2" class="s2 trade"><img id="is2" isid="2" src="/static/img/i/r/tfoo.png" class="dragable animopa itemtip iundefined is2 shopitem" slot="s2" itype="i" useit="0" subtype="tfoo" lvl="0" cls="" price="200" buy="148" sell="296" count="600" maxcount="10" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;"><div id="is2c" class="count is2c" style="visibility: visible;">-</div><div id="is2sell" class="count sellprice is2sell"></div><div id="is2buy" class="count buyprice is2buy"></div><div id="is2arrow" class="tradearrow arrow0"></div></div><div id="s3" class="s3 trade"><img id="is3" isid="3" src="/static/img/i/r/tfue.png" class="dragable animopa itemtip iundefined is3 shopitem" slot="s3" itype="i" useit="0" subtype="tfue" lvl="0" cls="" price="500" buy="603" sell="1307" count="100" maxcount="10" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;"><div id="is3c" class="count is3c" style="visibility: visible;">-</div><div id="is3sell" class="count sellprice is3sell"></div><div id="is3buy" class="count buyprice is3buy"></div><div id="is3arrow" class="tradearrow arrow0"></div></div><div id="s4" class="s4 trade"><img id="is4" isid="4" src="/static/img/i/r/tmin.png" class="dragable animopa itemtip iundefined is4 shopitem" slot="s4" itype="i" useit="0" subtype="tmin" lvl="0" cls="" price="1000" buy="1715" sell="0" count="236" maxcount="10" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;"><div id="is4c" class="count is4c" style="visibility: visible;">-</div><div id="is4sell" class="count sellprice is4sell"></div><div id="is4buy" class="count buyprice is4buy"></div><div id="is4arrow" class="tradearrow arrow0"></div></div><div id="s5" class="s5 trade"><img id="is5" isid="5" src="/static/img/i/r/tmat.png" class="dragable animopa itemtip iundefined is5 shopitem" slot="s5" itype="i" useit="0" subtype="tmat" lvl="0" cls="" price="3000" buy="5237" sell="0" count="215" maxcount="10" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;"><div id="is5c" class="count is5c" style="visibility: visible;">-</div><div id="is5sell" class="count sellprice is5sell"></div><div id="is5buy" class="count buyprice is5buy"></div><div id="is5arrow" class="tradearrow arrow0"></div></div><div id="s6" class="s6 trade"><img id="is6" isid="6" src="/static/img/i/r/talc.png" class="dragable animopa itemtip iundefined is6 shopitem" slot="s6" itype="i" useit="0" subtype="talc" lvl="0" cls="" price="7000" buy="13814" sell="0" count="110" maxcount="10" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;"><div id="is6c" class="count is6c" style="visibility: visible;">-</div><div id="is6sell" class="count sellprice is6sell"></div><div id="is6buy" class="count buyprice is6buy"></div><div id="is6arrow" class="tradearrow arrow0"></div></div><div id="s7" class="s7 trade"><img id="is7" isid="7" src="/static/img/i/r/tmed.png" class="dragable animopa itemtip iundefined is7 shopitem" slot="s7" itype="i" useit="0" subtype="tmed" lvl="0" cls="" price="15000" buy="10944" sell="21889" count="653" maxcount="10" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;"><div id="is7c" class="count is7c" style="visibility: visible;">-</div><div id="is7sell" class="count sellprice is7sell"></div><div id="is7buy" class="count buyprice is7buy"></div><div id="is7arrow" class="tradearrow arrow0"></div></div><div id="s8" class="s8 trade"><img id="is8" isid="8" src="/static/img/i/r/ttch.png" class="dragable animopa itemtip iundefined is8 shopitem" slot="s8" itype="i" useit="0" subtype="ttch" lvl="0" cls="" price="25000" buy="22529" sell="48812" count="540" maxcount="10" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;"><div id="is8c" class="count is8c" style="visibility: visible;">-</div><div id="is8sell" class="count sellprice is8sell"></div><div id="is8buy" class="count buyprice is8buy"></div><div id="is8arrow" class="tradearrow arrow0"></div></div><div id="s9" class="s9 trade"><img id="is9" isid="9" src="/static/img/i/r/tart.png" class="dragable animopa itemtip iundefined is9 shopitem" slot="s9" itype="i" useit="0" subtype="tart" lvl="0" cls="" price="40000" buy="72241" sell="0" count="176" maxcount="10" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;"><div id="is9c" class="count is9c" style="visibility: visible;">-</div><div id="is9sell" class="count sellprice is9sell"></div><div id="is9buy" class="count buyprice is9buy"></div><div id="is9arrow" class="tradearrow arrow0"></div></div><div id="s10" class="s10 trade"><img id="is10" isid="10" src="/static/img/i/r/tgdt.png" class="dragable animopa itemtip iundefined is10 shopitem" slot="s10" itype="i" useit="0" subtype="tgdt" lvl="0" cls="" price="55000" buy="50143" sell="108644" count="500" maxcount="10" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;"><div id="is10c" class="count is10c" style="visibility: visible;">-</div><div id="is10sell" class="count sellprice is10sell"></div><div id="is10buy" class="count buyprice is10buy"></div><div id="is10arrow" class="tradearrow arrow0"></div></div><div id="s11" class="s11 trade"><img id="is11" isid="11" src="/static/img/i/r/tdrg.png" class="dragable animopa itemtip iundefined is11 shopitem" slot="s11" itype="i" useit="0" subtype="tdrg" lvl="0" cls="" price="80000" buy="153763" sell="0" count="130" maxcount="10" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;"><div id="is11c" class="count is11c" style="visibility: visible;">-</div><div id="is11sell" class="count sellprice is11sell"></div><div id="is11buy" class="count buyprice is11buy"></div><div id="is11arrow" class="tradearrow arrow0"></div></div><div id="s12" class="s12 trade"><img id="is12" isid="12" src="/static/img/i/r/twea.png" class="dragable animopa itemtip iundefined is12 shopitem" slot="s12" itype="i" useit="0" subtype="twea" lvl="0" cls="" price="110000" buy="100286" sell="217288" count="500" maxcount="10" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;"><div id="is12c" class="count is12c" style="visibility: visible;">-</div><div id="is12sell" class="count sellprice is12sell"></div><div id="is12buy" class="count buyprice is12buy"></div><div id="is12arrow" class="tradearrow arrow0"></div></div><div id="s13" class="s13 trade"><img id="is13" isid="13" src="/static/img/i/r/tlux.png" class="dragable animopa itemtip iundefined is13 shopitem" slot="s13" itype="i" useit="0" subtype="tlux" lvl="0" cls="" price="150000" buy="281459" sell="0" count="143" maxcount="10" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;"><div id="is13c" class="count is13c" style="visibility: visible;">-</div><div id="is13sell" class="count sellprice is13sell"></div><div id="is13buy" class="count buyprice is13buy"></div><div id="is13arrow" class="tradearrow arrow0"></div></div></div></div>';
			TC[HT] = tDCsrc;
			var tDC = S['TradeDialogContent'] = TC[QS]('#landing-trade');
			var DT = S['data'] = {};
			
			for(var i=1; i < 14; ++i){
				var CI		= tDC[QS]('#s'+i);
				var img 	= CI[QS]('#is'+i);
				var buy 	= CI[QS]('#is'+i+'sell');
				var sell 	= CI[QS]('#is'+i+'buy');
				var count 	= CI[QS]('#is'+i+'c');
				var arrow 	= CI[QS]('#is'+i+'arrow');
				DT[i] = {
					'img': {dom:img},
					'count':{dom:count},
					'sell': {dom:sell, info:{system:null,planet:null,cost:null,time:null}},
					'buy': {dom:buy, info:{system:null,planet:null,cost:null,time:null}},						
					'arrow':{dom:arrow}
				}
			}
			
			function dd(e){
				e.stopPropagation();
				if(tD[ST].display == 'none'){
					ui();
					tD.children[0][AC](tDC);
					tD[ST].display = 'block';
					W[AE]('click', hd);
					tB[RE]('click', dd);
				}
			}
			function hd(e){
				e.stopPropagation();
				if(tD[ST].display == 'block'){
					tD[ST].display = 'none';
					tD.children[0][RC](tDC);
					W[RE]('click', hd);
					tB[AE]('click', dd);
				}
			}
			function ui(){			
				for(var i in DT){
					var CI = tDC[QS]('#s'+i);
					if(!CI[QS]('#is'+i)){		CI[AC](DT[i].img.dom)	}
					if(!CI[QS]('#is'+i+'c')){	CI[AC](DT[i].count.dom)		}
					if(!CI[QS]('#is'+i+'sell')){	CI[AC](DT[i].buy.dom)	}
					if(!CI[QS]('#is'+i+'buy')){	CI[AC](DT[i].sell.dom)	}					
					if(!CI[QS]('#is'+i+'arrow')){	CI[AC](DT[i].arrow.dom)}
					var buy = trade.buy(i), sell = trade.sell(i), obj = {};
					(buy[0] && (obj.buy = buy[0])) 	 || (DT[i].buy.dom[HT] = '-');
					(sell[0] && (obj.sell = sell[0])) || (DT[i].sell.dom[HT] = '-');
					for(var price in obj){
						DT[i][price].dom[HT] = obj[price][price]+'кр.';
						DT[i][price].dom[SA]('title','Система: '+obj[price].system
										+'\nПланета: '+obj[price].planet
										+'\nОбновлено в '+obj[price].time.toLocaleTimeString());
						DT[i][price].info.system = obj[price].system;
						DT[i][price].info.planet = obj[price].planet;
						DT[i][price].info.cost = obj[price][price];
						DT[i][price].info.time = obj[price].time;
					}			
				}
			
			}
		}
		this.fine = function(m, v, t){			
			var c =  this.data[t],
				f = [];
			for(var p in c){
				if(c[p][m] != -1){
					if(!f[0]){ f[0] = c[p]; continue;}
					if(v == 'max'){
						if(c[p][m] > f[0][m]) f = [c[p]];
						else if(c[p][m] == f[0][m]) f.push(c[p]);
					}
					if(v == 'min'){
						if(c[p][m] < f[0][m]) f = [c[p]];
						else if(c[p][m] == f[0][m]) f.push(c[p]);
					}
				}
			}
			return f;
		}
		this.buy = function(t){
			return this.fine('buy','min', t);
		}
		this.sell = function(t){
			return this.fine('sell','max', t);
		}
		this.stop = function(){
			clearInterval(this.interval);
		}
		this.data = {};
		this.interval = setInterval(
			(function(){
				var land = document.querySelector('#fse-land-dialog');
				if(land){
					var system = fsE.sector.system.title;
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
						this.data[i] = this.data[i] || {};
						this.data[i][planet.innerHTML] = {
							system: system,
							planet: planet.innerHTML,
							sell: sell.innerHTML.replace('кр.','').replace(/\s/,'').replace('профицит','-1')*1,
							buy: buy.innerHTML.replace('кр.','').replace(/\s/,'').replace('дефицит','-1')*1,
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
	};
	this.jblst = new function jblstProcess(){
		this.colorArr = ['#f00','#0a0','#00a','#ff0','#0ff','#f0f'];
		this.cacheJob = function(){
			var ps = fsE.db.galaxy.planets,
				ls = fsE.land.db.joblist,
				cp = {},
				cj = {}; 
			for(var p in ps){cp[ps[p].title_ru] = ps[p].system}; 
			ls.map(function(e){
				var t = /^(.*):.*/.exec(e.title)[1];
				cj[cp[t]] = cj[cp[t]]||[];
				cj[cp[t]].push(e);
			});
			return cj;
		},
		this.colorJob = function(){
			var ca = [], 
				cj = this.cacheJob(), 
				cl = this.colorArr,
				tr = fsE.land.job_bar.domObj,
				lv = fsE.player.lvl,
				ps = 0; 
			for(var i in cj){ca.push(cj[i])};
			ca.map(function(a){
				a.map(function(e, i, a){
					var bb = tr[QS]('[id="'+e.qsid+'"]');
					var bt = bb[QS]('.jxButton');
					var bc = bt[QS]('.jxButtonContent');
					if(e.info.start_level > lv){bb[ST].display = 'none';}
					if(a.length > 1){						
						bt[ST].boxShadow = '0 0 10px 3px '+cl[ps]+' inset';
						bc[ST].boxShadow = '-3px 0 10px 3px '+cl[ps++]+' inset';
					}						
				});
			});
		}
		this.interval = setInterval(this.colorJob.bind(this),3000);
		this.stop = function(){clearInterval(this.interval);}
	}
	
}
var bot = new BOT();

