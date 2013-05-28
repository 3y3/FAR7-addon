function HELPER(){
var W = window,
	D = W.document,	
	U = 'http://far7-plugin.tk/plugin/',
	R = W['XMLHttpRequest'],
	fsE = W.fsE,
	AC = 'appendChild',
	CE = 'createElement',
	RC = 'removeChild',
	QS = 'querySelector',
	QA = 'querySelectorAll'
	ST = 'style',
	SA = 'setAttribute',
	AE = 'addEventListener',
	RE = 'removeEventListener',
	HT = 'innerHTML',
	A = this;
	A['websk'] = new function webskProcess(){
		var S = this,
			C = null;
			S.onmessage = function(e){ C(e);
				if(e.data!='h'){
					
					var data = JSON.parse(e.data.replace(/^a\[(.*)\]$/,'$1'));
					if(data){
						S.processor[data.type] && S.processor[data.type](data.eval);
						!S.processor[data.type] && S.processor['_'](data.type,data.eval);
					}
				}				
			}
			S.processor = {
				'_':function(t,e){console.log(t,e)},
				'i':function(e){/*new map element*/},
				'm':function(e){/*object move to*/},
				'lja': function(e){A.jblst.colorJob();},
				'ltu': function(e){A.trade.update(e).write();}
			}
			var readyState = setInterval(function(){
				try{
					C = fsE.tachyon.connection._transport.ws.onmessage; 
					fsE.tachyon.connection._transport.ws.onmessage = S.onmessage;
					clearInterval(readyState);
				}
				catch(e){}				
			},1000);		
	}
	A['trade'] = new function tradeProcess(){		
		var T = this,
			C = null;
		T.interface = new function(){
			var S = this;
			var far = D[QS]('#far-interface');
			var commbar = D[QS]('#commbar');
			var cC = commbar[QS]('.jxBarContainer');
			var TC = D[CE]('div');
			button:{ TC[HT] = 
				'<span class="jxButtonContainer" id="addon-trade-button">'
					+'<a class="jxButton jxButtonFlyout jxDiscloser" target="" href="javascript:void(0);" title="Информация по лучшим ценам на ресурсы с посещенных вами планет." alt="Информация по лучшим ценам на ресурсы с посещенных вами планет.">'
						+'<span class="jxButtonContent">'
							+'<img class="jxButtonIcon" src="http://game.far7.by/static/img/u/a_pixel.png" title="Информация по лучшим ценам на ресурсы с посещенных вами планет." alt="Информация по лучшим ценам на ресурсы с посещенных вами планет." style="background-image: url(http://game.far7.by/static/img/u/icon-trade.png);"/>'
							+'<span class="jxButtonLabel" style="">'
								+'<div id="addon-trade">Торговля</div>'
				+'</span></span></a></span>';
			}
			
			var tB = S['TradeButton'] = TC[QS]('#addon-trade-button');
				tB[AE]('click', dd, false);
			cC[AC](tB);
			commbar[ST].width = '1000px';
			
			var rect = tB.getClientRects()[0];
			
			panel:{ TC[HT] =
				'<div id="addon-trade-panel" class="jxFlyout jxHasChrome" style="left: '+(rect.left - 5)+'px; top: 25px; z-index: 1000;width: 670px; height: 375px;display: none;">'
					+'<div class="jxFlyoutContent"></div>'
					+'<div class="jxChrome" style="padding: 0px; background-image: none; z-index: -1;"><div class="jxChromeTR"><img class="png24" src="http://game.far7.by/static/img/u/chrome-flyout.png" alt="" title=""></div><div class="jxChromeTL"><img class="png24" src="http://game.far7.by/static/img/u/chrome-flyout.png" alt="" title=""></div><div class="jxChromeBL"><img class="png24" src="http://game.far7.by/static/img/u/chrome-flyout.png" alt="" title=""></div><div class="jxChromeBR"><img class="png24" src="http://game.far7.by/static/img/u/chrome-flyout.png" alt="" title=""></div></div>'
				+'</div>';
			}
			
			var tD = S['TradeDialog'] = TC[QS]('#addon-trade-panel');
			far[AC](tD);
			
			dialog:{ TC[HT] = 
				'<div id="landing-trade">'+
					'<div id="landing-trade-shp">'+
						'<div id="s1" class="s1 trade">'+
							'<img id="is1" isid="1" src="/static/img/i/r/tore.png" class="dragable animopa itemtip iundefined is1 shopitem" title="" style="top: 1px; left: 1px; margin: 0px; position: relative;">'+
							'<div id="is1c" class="count is1c" style="visibility: visible;">-</div>'+
							'<div id="is1sell" class="count sellprice is1sell"></div>'+
							'<div id="is1buy" class="count buyprice is1buy"></div>'+
							'<div id="is1arrow" class="tradearrow arrow0"></div>'+
						'</div>'+
						'<div id="s2" class="s2 trade">'+
							'<img id="is2" isid="2" src="/static/img/i/r/tfoo.png" class="dragable animopa itemtip iundefined is2 shopitem" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;">'+
							'<div id="is2c" class="count is2c" style="visibility: visible;">-</div>'+
							'<div id="is2sell" class="count sellprice is2sell"></div>'+
							'<div id="is2buy" class="count buyprice is2buy"></div>'+
							'<div id="is2arrow" class="tradearrow arrow0"></div>'+
						'</div>'+
						'<div id="s3" class="s3 trade">'+
							'<img id="is3" isid="3" src="/static/img/i/r/tfue.png" class="dragable animopa itemtip iundefined is3 shopitem" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;">'+
							'<div id="is3c" class="count is3c" style="visibility: visible;">-</div>'+
							'<div id="is3sell" class="count sellprice is3sell"></div>'+
							'<div id="is3buy" class="count buyprice is3buy"></div>'+
							'<div id="is3arrow" class="tradearrow arrow0"></div>'+
						'</div>'+
						'<div id="s4" class="s4 trade">'+
							'<img id="is4" isid="4" src="/static/img/i/r/tmin.png" class="dragable animopa itemtip iundefined is4 shopitem" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;">'+
							'<div id="is4c" class="count is4c" style="visibility: visible;">-</div>'+
							'<div id="is4sell" class="count sellprice is4sell"></div>'+
							'<div id="is4buy" class="count buyprice is4buy"></div>'+
							'<div id="is4arrow" class="tradearrow arrow0"></div>'+
						'</div>'+
							'<div id="s5" class="s5 trade">'+
							'<img id="is5" isid="5" src="/static/img/i/r/tmat.png" class="dragable animopa itemtip iundefined is5 shopitem" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;">'+
							'<div id="is5c" class="count is5c" style="visibility: visible;">-</div>'+
							'<div id="is5sell" class="count sellprice is5sell"></div>'+
							'<div id="is5buy" class="count buyprice is5buy"></div>'+
							'<div id="is5arrow" class="tradearrow arrow0"></div>'+
						'</div>'+
						'<div id="s6" class="s6 trade">'+
							'<img id="is6" isid="6" src="/static/img/i/r/talc.png" class="dragable animopa itemtip iundefined is6 shopitem" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;">'+
							'<div id="is6c" class="count is6c" style="visibility: visible;">-</div>'+
							'<div id="is6sell" class="count sellprice is6sell"></div>'+
							'<div id="is6buy" class="count buyprice is6buy"></div>'+
							'<div id="is6arrow" class="tradearrow arrow0"></div>'+
						'</div>'+
						'<div id="s7" class="s7 trade">'+
							'<img id="is7" isid="7" src="/static/img/i/r/tmed.png" class="dragable animopa itemtip iundefined is7 shopitem" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;">'+
							'<div id="is7c" class="count is7c" style="visibility: visible;">-</div>'+
							'<div id="is7sell" class="count sellprice is7sell"></div>'+
							'<div id="is7buy" class="count buyprice is7buy"></div>'+
							'<div id="is7arrow" class="tradearrow arrow0"></div>'+
						'</div>'+
						'<div id="s8" class="s8 trade">'+
							'<img id="is8" isid="8" src="/static/img/i/r/ttch.png" class="dragable animopa itemtip iundefined is8 shopitem" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;">'+
							'<div id="is8c" class="count is8c" style="visibility: visible;">-</div>'+
							'<div id="is8sell" class="count sellprice is8sell"></div>'+
							'<div id="is8buy" class="count buyprice is8buy"></div>'+
							'<div id="is8arrow" class="tradearrow arrow0"></div>'+
						'</div>'+
						'<div id="s9" class="s9 trade">'+
							'<img id="is9" isid="9" src="/static/img/i/r/tart.png" class="dragable animopa itemtip iundefined is9 shopitem" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;">'+
							'<div id="is9c" class="count is9c" style="visibility: visible;">-</div>'+
							'<div id="is9sell" class="count sellprice is9sell"></div>'+
							'<div id="is9buy" class="count buyprice is9buy"></div>'+
							'<div id="is9arrow" class="tradearrow arrow0"></div>'+
						'</div>'+
						'<div id="s10" class="s10 trade">'+
							'<img id="is10" isid="10" src="/static/img/i/r/tgdt.png" class="dragable animopa itemtip iundefined is10 shopitem" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;">'+
							'<div id="is10c" class="count is10c" style="visibility: visible;">-</div>'+
							'<div id="is10sell" class="count sellprice is10sell"></div>'+
							'<div id="is10buy" class="count buyprice is10buy"></div>'+
							'<div id="is10arrow" class="tradearrow arrow0"></div>'+
						'</div>'+
						'<div id="s11" class="s11 trade">'+
							'<img id="is11" isid="11" src="/static/img/i/r/tdrg.png" class="dragable animopa itemtip iundefined is11 shopitem" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;">'+
							'<div id="is11c" class="count is11c" style="visibility: visible;">-</div>'+
							'<div id="is11sell" class="count sellprice is11sell"></div>'+
							'<div id="is11buy" class="count buyprice is11buy"></div>'+
							'<div id="is11arrow" class="tradearrow arrow0"></div>'+
						'</div>'+
						'<div id="s12" class="s12 trade">'+
							'<img id="is12" isid="12" src="/static/img/i/r/twea.png" class="dragable animopa itemtip iundefined is12 shopitem" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;">'+
							'<div id="is12c" class="count is12c" style="visibility: visible;">-</div>'+
							'<div id="is12sell" class="count sellprice is12sell"></div>'+
							'<div id="is12buy" class="count buyprice is12buy"></div>'+
							'<div id="is12arrow" class="tradearrow arrow0"></div>'+
						'</div>'+
						'<div id="s13" class="s13 trade">'+
							'<img id="is13" isid="13" src="/static/img/i/r/tlux.png" class="dragable animopa itemtip iundefined is13 shopitem" title=""  style="top: 1px; left: 1px; margin: 0px; position: relative;">'+
							'<div id="is13c" class="count is13c" style="visibility: visible;">-</div>'+
							'<div id="is13sell" class="count sellprice is13sell"></div>'+
							'<div id="is13buy" class="count buyprice is13buy"></div>'+
							'<div id="is13arrow" class="tradearrow arrow0"></div>'+
						'</div>'+
					'</div>'+
				'</div>';
			}
			
			var tDC = S['TradeDialogContent'] = TC[QS]('#landing-trade');
			var DT = S['DOM'] = {};
			
			for(var i=1; i < 14; ++i){
				var CI		= tDC[QS]('#s'+i);
				var img 	= CI[QS]('#is'+i);
				var buy 	= CI[QS]('#is'+i+'buy');
				var sell 	= CI[QS]('#is'+i+'sell');
				var count 	= CI[QS]('#is'+i+'c');
				var arrow 	= CI[QS]('#is'+i+'arrow');
				DT[i] = {
					'img': {dom:img},
					'count':{dom:count},
					'sell': {dom:sell},
					'buy': {dom:buy},						
					'arrow':{dom:arrow}
				};
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
			};
			function hd(e){
				e.stopPropagation();
				if(tD[ST].display == 'block'){
					tD[ST].display = 'none';
					tD.children[0][RC](tDC);
					W[RE]('click', hd);
					tB[AE]('click', dd);
				}
			};
			function ui(){
				var xhr = new XMLHttpRequest();
					xhr.open('POST', U+'read', true);
					xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
					xhr.onreadystatechange = function(){
						if (xhr.readyState != 4) return;						
						if (xhr.status == 200) {
							var RS = JSON.parse(xhr.response);
							for(var i in RS){ ch(i);
								var buy = RS[i]['1'], sell = RS[i]['2'], obj = {buy:buy, sell:sell};
								for(var price in {buy:'',sell:''}){
									var system = fsE.db.galaxy.systems[obj[price].system]||{title_ru:'нет данных'},
										planet = fsE.db.galaxy.planets[obj[price].planet]||{title_ru:'нет данных'},
										time = new Date(obj[price].time*1),
										vart = new Date() - time;
										time = (vart > 1000*60*60)?'больше часа назад':'в '+time.toLocaleTimeString();
									DT[i][price].dom[HT] = obj[price].price+'кр.';
									DT[i][price].dom[SA]('title','Система: '+system.title_ru
													+'\nПланета: '+planet.title_ru
													+'\nОбновлено '+time);
								}								
							}
						} 
						else {// Old branch. Need update.
							for(var i in DT){ ch(i);
								var buy = trade.buy(i), sell = trade.sell(i), obj = {};
								(buy[0] && (obj.buy = buy[0])) 	 || (DT[i].buy.dom[HT] = '-');
								(sell[0] && (obj.sell = sell[0])) || (DT[i].sell.dom[HT] = '-');
								for(var price in obj){
									DT[i][price].dom[HT] = obj[price][price]+'кр.';
									DT[i][price].dom[SA]('title','Система: '+(fsE.db.galaxy.systems[obj[price].system+'.title_ru']||"нет данных")
													+'\nПланета: '+(fsE.db.galaxy.planets[obj[price].planet+'.title_ru']||"нет данных")
													+'\nОбновлено '+(new Date(obj[price].time).toLocaleTimeString()));
								}			
							}
						}
					}
					xhr.send("jsonString=" + JSON.stringify({fraction:fsE.player.race}));			
			};
			function ch(i){
				var CI = tDC[QS]('#s'+i);
				if(!CI[QS]('#is'+i)){		CI[AC](DT[i].img.dom)	}
				if(!CI[QS]('#is'+i+'c')){	CI[AC](DT[i].count.dom)		}
				if(!CI[QS]('#is'+i+'sell')){	CI[AC](DT[i].buy.dom)	}
				if(!CI[QS]('#is'+i+'buy')){	CI[AC](DT[i].sell.dom)	}					
				if(!CI[QS]('#is'+i+'arrow')){	CI[AC](DT[i].arrow.dom)}
			}
		}
		T.fine = function(m, v, t){			
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
		T.buy = function(t){
			return this.fine('buy','min', t);
		}
		T.sell = function(t){
			return this.fine('sell','max', t);
		}
		T.data = {};
		T.write = function(){
			var uid = fsE.player.uid,
				fraction = fsE.player.race,
				player = fsE.player.login,
				system = fsE.land.planet.system,
				planet = fsE.land.planet.id,
				time = new Date().getTime();
			if(T.data[planet]){
				var req = {
					uid:uid,
					fraction:fraction,
					player:player,
					system:system,
					planet:planet,
					time:time,
					info:T.data[planet]
				},
				xhr = new XMLHttpRequest();				
				xhr.open('POST', U+'write', true);
				xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xhr.send("jsonString=" + JSON.stringify(req));
			}
			return T;
		}
		T.update = function(data){
			var planet = fsE.land.planet.id;
			if(planet){				
				T.data[planet][data.isid] = {buy:data.sell, sell:data.buy};
			}
			return T;
		}
		T.collect = function(){
			var land = fsE.land.alltabs.trade.shp.children,
				planet = fsE.land.planet.id;
			var i = 1, CM = land.item(i-1);
			while(CM){ CM = CM.children[0];
				var buy = CM.attributes.buy.value;
				var sell = CM.attributes.sell.value;
				T.data[planet] = T.data[planet] || {};
				T.data[planet][i] = {
					sell: buy*1,
					buy: sell*1
				}
				CM = land.item(++i-1);
			}
			return T;
		}
		T.open = function(){ C.call(fsE.land.dialog);			
			(function wait(){
				if(!fsE.land.loading && fsE.land.planet){
					T.collect().write();
				}
				else{
					setTimeout(wait, 500);
				}
			})();
			return T;
		}
		T.start = function(){
			var readyState = setInterval(function(){
				try{
					C = fsE.land.dialog.open; 
					fsE.land.dialog.open = T.open;
					if(!fsE.land.loading && fsE.land.planet){
						T.collect().write();
					}
					clearInterval(readyState);
				}
				catch(e){console.log(e.message)}
			},1000);
			return T;
		}
		T.stop = function(){}		
	}
	A['jblst'] = new function jblstProcess(){
		this.colorArr = ['#f00','#0a0','#00a','#ff0','#0ff','#f0f'];
		this.cacheJob = function(){
			var ps = fsE.db.galaxy.planets,
				ls = fsE.land && fsE.land.db && fsE.land.db.joblist,
				cp = {},
				cj = {};
			if(ls){
				for(var p in ps){cp[ps[p].title_ru] = ps[p].system}; 
				ls.map(function(e){
					var t = /^(.*):.*/.exec(e.title)[1];
					cj[cp[t]] = cj[cp[t]]||[];
					cj[cp[t]].push(e);
				});
				return cj;
			}
			return false;			
		},
		this.colorJob = function(){
			var ca = [], 
				cj = this.cacheJob(), 
				cl = this.colorArr,
				tr = fsE.land && fsE.land.job_bar.domObj,
				lv = fsE.player.lvl,
				ps = 0;
			if(cj && tr){
				for(var i in cj){ca.push(cj[i])};
				ca.map(function(a){
					a.map(function(e, i){
						var bb = tr[QS]('[id="'+e.qsid+'"]');
						var bt = bb[QS]('.jxButton');
						var bc = bt[QS]('.jxButtonContent');
						if(e.info.start_level > lv){bb[ST].opacity = '0.3';}
						if(a.length > 1){						
							bt[ST].boxShadow = '0 0 10px 3px '+cl[ps]+' inset';
							bc[ST].boxShadow = '-3px 0 10px 3px '+cl[ps]+' inset';
						}						
					});
					(a.length > 1) && ps++;
				});
			}			
		}				
		this.start = function(){
			this.interval = setInterval(this.colorJob.bind(this),1000);
		}
		this.stop = function(){
			clearInterval(this.interval);
		}
		this.interval = null;
	}
	A['shlst'] = new function shlstProcess(){
		this.cacheShp = function(){
			var sh = fsE.land.db.shop,
				ch = {};
			for(var i in sh){var s = sh[i].subtype;if(s){ch[s]=ch[s]||[];ch[s].push(sh[i]);}}
			return ch;
		}
		this.lightBst = function(){
			var sh = fsE.land.tab_div.shop.shp,
				ch = this.cacheShp();
			for(var i in ch){				
				(ch[i].length > 1) && ch[i].sort(function(a,b){
					var c = d = 0; 
					for(var s in a.bonus){if(/^a_.*/.test(s)) c+=a.bonus[s]*1;}
					for(var s in b.bonus){if(/^a_.*/.test(s)) d+=b.bonus[s]*1;}
					return c < d;
				});
				ch[i].map(function(e,i){
					var bb = sh[QS]('#s'+e.slot);
					if(i==0){bb[ST].boxShadow = '0 0 10px 3px #0f0 inset';}
					else if(bb[ST].boxShadow){bb[ST].boxShadow = ''}
				});
			}
		}				
		this.start = function(){
			this.interval = setInterval(this.lightBst.bind(this),3000);
		}
		this.stop = function(){
			clearInterval(this.interval);
		}
		this.interval = null;			
	}
	A['gchat'] = new function gchatProcess(){
	
	}
	A['start'] = function(a){a.map(function(m){A[m].start()})};
}
HELPER = new HELPER()
HELPER.start(["trade","jblst","shlst"]);
/*
<div id="globalchat-history" style="
    position: absolute;  
    top: 35px;  
    right: 2px;  
    background: no-repeat center;  height: 16px;  width: 16px;  cursor: url(&quot;/static/img/u/cursor-pointer.png&quot;) 8 0, pointer;
    background-image: url(http://game.far7.by/static/img/u/icon-communicator-quests.png);
" title="История сообщений"></div>
*/