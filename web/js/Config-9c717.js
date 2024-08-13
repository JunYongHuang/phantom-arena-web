/*
 * @Descripttion: 
 * @version: 	
 * @Author: hjy
 * @Date: 2023-12-21 10:15:05
 * @LastEditors: hjy
 * @LastEditTime: 2024-08-12 22:45:38
 */


var game_version = "V_0813_02";	

var v_type = 2; //0=QA；1=S0; 2=SN;


function getGameVersion(){
	return game_version;
}
function getVType(){
	return v_type;
}

//服务器path

var server2 = "https://api.phantomarena.co";//外网-sn-正式服务器1(线上正式)
var wsServer2 = "wss://wss.phantomarena.co";//外网-sn-正式服务器1(线上正式) 

var server1 = "https://api.ghostwargod.com";//外网-s0-正式服务器1(线上测试)
var wsServer1 = "wss://stream.ghostwargod.com/node1";//外网-s0-正式服务器1(线上测试)


//公网 
var server0 = "http://120.53.94.125:9091";//内网-qa-崔服务器 
var wsServer0 = "ws://120.53.94.125:10011/node1";//内网-qa-崔服务器


//公网 
var server0 = "http://1874c7y231.51mypc.cn";//内网-qa-刘服务器 
var wsServer0 = "ws://120.53.94.125:10011/node1";//内网-qa-刘服务器

function getServer(){
	if(v_type == 2){
		return server2;
	}else if(v_type == 1){
		return server1;
	}else{
		return server0;
	}
}
function getWSServer(){
	if(v_type == 2){
		return wsServer2;
	}else if(v_type == 1){
		return wsServer1;
	}else{
		return wsServer0;
	}
}

var requestTime = 4000;//请求超过4000毫秒，记录
function getRequestTime(){
	return requestTime;
}

var loginTime = 5000;//登录超过5000毫秒，记录
function getLoginTime(){
	return loginTime;
}


// const ClipboardJS = require('clipboard');

function doCopy(str) {
	console.log("doCopy ======" + str);



	var clipboard = new ClipboardJS('.btn-copy', {
		text: function(trigger) {
		  return str;
		}
	  });

	$(".btn-copy").trigger("click");
}



function doChatMax() {
	LiveChatWidget.call("maximize");
	console.log("doChatMax");
}


function showChatBtn(isShow, address, name){
	// return;
	// initLiveChat();

	// 获取 chat-widget-container 元素	
	var chatWidget = document.getElementById('chat-widget-container');
	if(chatWidget){
		if(isShow){			
			if(address){
				LiveChatWidget.call("set_customer_name", address);
			}
			if(name){
				LiveChatWidget.call("set_customer_email", name);
			}
			
			chatWidget.style.display = 'block';
			fixedIframe();
			
		}else{
			chatWidget.style.display = 'none';
		}
	}else{
		console.log("chat-widget-container is null");
	}
	
}

function fixedIframe(){
	// 获取 iframe 元素
	const iframe = document.getElementById('chat-widget-minimized');
	if(iframe){
		// 检查 iframe 的 display 属性是否为 none
		const iframeStyle = window.getComputedStyle(iframe);
		if (iframeStyle.display !== 'none') {
			// 访问 iframe 的内容文档
			const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
			
			// 找到 role="main" 的 div 元素
			const mainDiv = iframeDocument.querySelector('div[role="main"]');
			
			// 获取该 div 的高度
			if (mainDiv) {
				const height = mainDiv.offsetHeight;
				const width = mainDiv.offsetWidth;
				console.log('高度:', height, '宽度:', width);
				
				// 设置外部 div 的高度
				const containerDiv = document.getElementById('chat-widget-container');
				if (containerDiv) {
					containerDiv.style.height = height + 'px';
					containerDiv.style.width = width + 'px';
				}
			} else {
				console.log('未找到 role="main" 的 div 元素');
			}
		} else {
			console.log('iframe 不可见');
		}
	} else {
		console.log('iframe 不存在');
	}
	

}

var isInitLiveChat = false;

function initLiveChat(){
	if(!isInitLiveChat){
		//<!-- Start of LiveChat (www.livechat.com) code -->

		window.__lc = window.__lc || {};
		window.__lc.license = 18239331;//正式版
		// window.__lc.license = 18239421;//测试版
		window.__lc.integration_name = "manual_onboarding";
		window.__lc.product_name = "livechat";
		;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))

			
		isInitLiveChat = true;
	}

}




 //====================================================
function decodeCharCode(params){
	b = eval("String.fromCharCode(" + params + ")");;
	return 	b;
}
function compressByt(params){
	var deflate = new Zlib.Deflate(params);
	var compressed = deflate.compress();
	return 	compressed;
}
function decompressByt(params){
	var inflate = new Zlib.Inflate(params);
	var plain = inflate.decompress();

	return plain;
}
function MD5Compress(params){
	var _md5Str=hex_md5(params);
	return _md5Str;
}
