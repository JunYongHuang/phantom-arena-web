/*
 * @Descripttion: 
 * @version: 
 * @Author: hjy
 * @Date: 2023-12-21 10:15:05
 * @LastEditors: hjy
 * @LastEditTime: 2024-04-05 13:55:58
 */


var game_version = "20240405_04";

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


	// new ClipboardJS(".btn-copy", {
	//   text: function(trigger) {
	// 	return str;
	//   }
	// });



	var clipboard = new ClipboardJS('.btn-copy', {
		text: function(trigger) {
		  return str;
		}
	  });

// clipboard.on('success', function(e) {
//     console.info('Action:', e.action);
//     console.info('Text:', e.text);
//     console.info('Trigger:', e.trigger);

//     e.clearSelection();
// });

// clipboard.on('error', function(e) {
//     console.error('Action:', e.action);
//     console.error('Trigger:', e.trigger);
// });


	$(".btn-copy").trigger("click");
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
