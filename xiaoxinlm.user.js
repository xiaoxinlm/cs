// ==UserScript==
// @name         小新脚本，全网VIP视频破解,去广告,无需关注公众号，百度网盘直链下载，大小无限制. 全网音乐解析, 音乐免费下载在线听，知乎解析增强，下载知乎视频,CSDN使用增强等多功能脚本等等
// @namespace    http://jx.xiaoxinlm.com/01.html
// @version      1.0
// @description  【维护更新中 功能有】1：百度网盘直链下载 可以一次性下载单文件,大小没有限制. 2：视频解析，支持大部分视频播放平台；3：知乎   外链接直接跳出 短视频下载  问答时间可视化 内容自动展开  免登录 4：CSDN阅读加强：CSDN自动展开、去广告、净化剪贴板、免登陆等、去广告、净化剪贴板、免登陆等；5：全网音乐免费听直接下载.等等
// @author       小新博客 www.xiaoxinlm.com
// @include      *://pan.baidu.com/disk/home*
// @include      *://yun.baidu.com/disk/home*
// @include      *://pan.baidu.com/s*
// @include      *://yun.baidu.com/s*
// @include      *://wenku.baidu.com/*
// @match        *://music.163.com/*
// @match        *://y.qq.com/*
// @match        *://www.kugou.com/*
// @include      *://www.iesdouyin.com/share/video/*
// @include      *://*.zhihu.com/*
// @include      *://v.vzuu.com/video/*
// @include      *://video.zhihu.com/video/*
// @include      *://blog.csdn.net/*/article/details/*
// @include      *://*.blog.csdn.net/article/details/*
// @include      *://bbs.csdn.net/topics/*
// @include      *://*.iteye.com/blog/*
// @include      *://*.youku.com/v_*
// @include      *://*.iqiyi.com/v_*
// @include      *://*.iqiyi.com/w_*
// @include      *://*.iqiyi.com/a_*
// @include      *://*.le.com/ptv/vplay/*
// @include      *://v.qq.com/x/cover/*
// @include      *://v.qq.com/x/page/*
// @include      *://*.tudou.com/listplay/*
// @include      *://*.tudou.com/albumplay/*
// @include      *://*.tudou.com/programs/view/*
// @include      *://*.mgtv.com/b/*
// @include      *://film.sohu.com/album/*
// @include      *://tv.sohu.com/v/*
// @include      *://*.acfun.cn/v/*
// @include      *://*.bilibili.com/video/*
// @include      *://*.bilibili.com/anime/*
// @include      *://*.bilibili.com/bangumi/play/*
// @include      *://*.baofeng.com/play/*
// @include      *://vip.pptv.com/show/*
// @include      *://v.pptv.com/show/*
// @include      *://item.taobao.com/*
// @include      *://*detail.tmall.com/*
// @include      *://*detail.tmall.hk/*
// @include      *://*product.suning.com/*
// @include      *://*item.jd.com/*
// @include      *://*detail.vip.com/*
// @include      *://*mobile.yangkeduo.com/goods*
// @include      *://video.kuaishou.com/*/*
// @require      http://libs.baidu.com/jquery/2.0.0/jquery.min.js
// @connect      kuaishou.com
// @connect      d.pcs.baidu.com
// @connect      baidu.com
// @connect      baidupcs.com
// @connect      baiduyun.wiki
// @connect      localhost
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@9
// @license      GPL License
// @connect      d.pcs.baidu.com
// @connect      baidu.com
// @connect      baidupcs.com
// @connect      baiduyun.wiki
// @connect      localhost
// @connect      ixigua.com
// @connect      zhihu.com
// @connect      vzuu.com
// @connect      douyinvod.com
// @connect      aweme.snssdk.com
// @connect      iesdouyin.com
// @connect      www.whatbuytoday.com
// @grant        GM_info
// @grant        GM_download
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_setClipboard
// @grant        GM_getResourceURL
// @grant        GM_getResourceText
// @grant        GM_download
// @grant        GM_xmlhttpRequest
// @run-at       document-idle
// @grant        GM_addStyle
// @grant        unsafeWindow
// @charset		 UTF-8
// @grant        GM_registerMenuCommand
// @license      GPL License
// ==/UserScript==

(function() {
	'use strict';
	/////***********************
	//
	var isOpenVideoVipModule = true;   
	var isOpenMusicVipModule = true;  
	var isOpenGoodsCouponModule = true;//是否开启优惠券模块
	var isOpenZhihuModule = true;      
	/////***********************
	
	var $ = $ || window.$;
	var window_url = window.location.href;
	var website_host = window.location.host;
	
	//百度网盘
(function() {
var pan_title=new Array()
		pan_title[0]= "https://pan.baidu.com/"
		pan_title[1]= "https://yun.baidu.com/"
        let pan_link = location.href;
		for(var a=0;a<pan_title.length;a++){
			if(pan_link.indexOf(pan_title[a])!= -1){
                pan_link = pan_link.replace('baidu.com','baiduwp.com');
				var pan_html = "<a href="+pan_link+" target='_blank' style='cursor:pointer;z-index:98;display:block;width:30px;height:30px;line-height:30px;position:fixed;left:0;top:300px;text-align:center;'><img src='data:image/gif;base64,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' style='width:50px' ></a>";
				$("body").append(pan_html);

//百度网盘脚本开始
//
;(() => {
  'use strict'
  const version = GM_info.script.version
  const classMap = {
    'bar-search': 'OFaPaO',
    'list-tools': 'tcuLAu',
    'header': 'vyQHNyb'
  }
  const errorMsg = {
    'dir': '提示：不支持整个文件夹下载，可进入文件夹内获取文件链接下载！',
    'unlogin': '提示：登录网盘后才能使用此功能哦！',
    'fail': '提示：获取下载链接失败！请刷新网页后重试！',
    'unselected': '提示：请先选择要下载的文件！',
    'morethan': '提示：多个文件请点击【显示链接】！',
    'toobig': '提示：只支持300M以下的文件夹，若链接无法下载，请进入文件夹后勾选文件获取！',
    'timeout': '提示：页面过期，请刷新重试！',
    'wrongcode': '提示：获取验证码失败！',
    'deleted': '提示：文件不存在或已被百度和谐，无法下载！',
  }
  let defaultCode = 250528
  let secretCode = getValue('secretCodeV') ? getValue('secretCodeV') : defaultCode
  let panhelper = {}
  let userAgent = ''
  let Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  let ariaRPC = {
    domain: getValue('rpcDomain') || 'http://localhost',
    port: getValue('rpcPort') || 6800,
    token: getValue('rpcToken') || '',
    dir: getValue('rpcDir') || 'D:/',
  }

  function clog(c1, c2, c3) {
    c1 = c1 ? c1 : ''
    c2 = c2 ? c2 : ''
    c3 = c3 ? c3 : ''
    console.group('[网盘直链下载助手]')
    console.log(c1, c2, c3)
    console.groupEnd()
  }

  function getBDUSS() {
    let baiduyunPlugin_BDUSS = getStorage('baiduyunPlugin_BDUSS') ? getStorage('baiduyunPlugin_BDUSS') : '{"baiduyunPlugin_BDUSS":""}'
    let BDUSS = JSON.parse(baiduyunPlugin_BDUSS).BDUSS
    if (!BDUSS) {
      Swal.fire({
        icon: 'error',
        title: '提示',
        html: panhelper.t.e,
        footer: '【网盘万能助手】是增强扩展插件，安装后请刷新',
        confirmButtonText: '安装'
      }).then((result) => {
        if (result.value) {
          GM_openInTab(panhelper.w, {active: true})
        }
      })
    }
    return BDUSS
  }

  function aria2c(link, filename, ua) {
    let BDUSS = getBDUSS()
    ua = ua || userAgent
    if (BDUSS) {
      return encodeURIComponent(`aria2c "${link}" --out "${filename}" --header "User-Agent: ${ua}" --header "Cookie: BDUSS=${BDUSS}"`)
    } else {
      return '请先安装网盘万能助手，安装后请重启浏览器！！！'
    }
  }

  function replaceLink(link) {
    return link ? link.replace(/&/g, '&amp;') : ''
  }

  function detectPage() {
    let regx = /[\/].+[\/]/g
    let page = location.pathname.match(regx)
    return page[0].replace(/\//g, '')
  }

  function getCookie(e) {
    let o, t
    let n = document, c = decodeURI
    return n.cookie.length > 0 && (o = n.cookie.indexOf(e + "="), -1 != o) ? (o = o + e.length + 1, t = n.cookie.indexOf(";", o), -1 == t && (t = n.cookie.length), c(n.cookie.substring(o, t))) : ""
  }

  function setCookie(key, value, t) {
    let oDate = new Date()  //创建日期对象
    oDate.setTime(oDate.getTime() + t * 60 * 1000) //设置过期时间
    document.cookie = key + '=' + value + ';expires=' + oDate.toGMTString()  //设置cookie的名称，数值，过期时间
  }

  function getValue(name) {
    return GM_getValue(name)
  }

  function setValue(name, value) {
    GM_setValue(name, value)
  }

  function getStorage(key) {
    return localStorage.getItem(key)
  }

  function setStorage(key, value) {
    return localStorage.setItem(key, value)
  }

  function encode(str) {
    return btoa(unescape(encodeURIComponent(btoa(unescape(encodeURIComponent(str))))))
  }

  function decode(str) {
    return decodeURIComponent(escape(atob(decodeURIComponent(escape(atob(str))))))
  }

  function getLogID() {
    let name = "BAIDUID"
    let u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/~！@#￥%……&"
    let d = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g
    let f = String.fromCharCode

    function l(e) {
      if (e.length < 2) {
        let n = e.charCodeAt(0)
        return 128 > n ? e : 2048 > n ? f(192 | n >>> 6) + f(128 | 63 & n) : f(224 | n >>> 12 & 15) + f(128 | n >>> 6 & 63) + f(128 | 63 & n)
      }
      let n = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320)
      return f(240 | n >>> 18 & 7) + f(128 | n >>> 12 & 63) + f(128 | n >>> 6 & 63) + f(128 | 63 & n)
    }

    function g(e) {
      return (e + "" + Math.random()).replace(d, l)
    }

    function m(e) {
      let n = [0, 2, 1][e.length % 3]
      let t = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0)
      let o = [u.charAt(t >>> 18), u.charAt(t >>> 12 & 63), n >= 2 ? "=" : u.charAt(t >>> 6 & 63), n >= 1 ? "=" : u.charAt(63 & t)]
      return o.join("")
    }

    function h(e) {
      return e.replace(/[\s\S]{1,3}/g, m)
    }

    function p() {
      return h(g((new Date()).getTime()))
    }

    function w(e, n) {
      return n ? p(String(e)).replace(/[+\/]/g, (e) => {
        return "+" == e ? "-" : "_"
      }).replace(/=/g, "") : p(String(e))
    }

    return w(getCookie(name))
  }

  function rpcSetting() {
    let dom = ''
    dom += '<div class="flex-center-between"><label for="rpcDomain" class="label">主机</label><input type="text" id="rpcDomain" value="' + ariaRPC.domain + '" class="swal2-input" placeholder="http://localhost"></div>'
    dom += '<div class="flex-center-between"><label for="rpcPort" class="label">端口</label><input type="text" id="rpcPort" value="' + ariaRPC.port + '" class="swal2-input" placeholder="6800"></div>'
    dom += '<div class="flex-center-between"><label for="rpcToken" class="label">密钥</label><input type="text" id="rpcToken" value="' + ariaRPC.token + '" class="swal2-input" placeholder="没有留空"></div>'
    dom += '<div class="flex-center-between"><label for="rpcDir" class="label">下载路径</label><input type="text" id="rpcDir" value="' + ariaRPC.dir + '" class="swal2-input" placeholder="默认为D:\"></div>'
    dom += '<div class="flex-center-between" style="margin-top: 15px;font-size: 0.85em;color: #999;"><div class="label">快速配置</div> <div style="flex: 1;text-align: left;"><span class="rtag" id="rpc1">Motrix</span><span class="rtag" id="rpc2">Aria2 Tools</span><span class="rtag" id="rpc3">AriaNgGUI</span></div></div>'
    dom = '<div>' + dom + '</div>'
    let $dom = $(dom)
    $(document).on('click', '#rpc1', () => {
      $('#rpcDomain').val('http://localhost')
      $('#rpcPort').val(16800)
      $('#rpcDir').val('D:')
    })
    $(document).on('click', '#rpc2', () => {
      $('#rpcDomain').val('http://localhost')
      $('#rpcPort').val(6800)
      $('#rpcDir').val('D:')
    })
    $(document).on('click', '#rpc3', () => {
      $('#rpcDomain').val('http://192.168.0.?')
      $('#rpcPort').val(6800)
      $('#rpcDir').val('/storage/emulated/0/Download')
    })
    Swal.fire({
        title: 'RPC配置',
        allowOutsideClick: false,
        html: $dom[0],
        showCancelButton: true,
        confirmButtonText: '保存',
        cancelButtonText: '取消',
        footer: panhelper.t.n
      }
    ).then((result) => {
      if (result.value) {
        ariaRPC.domain = $('#rpcDomain').val()
        ariaRPC.port = $('#rpcPort').val()
        ariaRPC.token = $('#rpcToken').val()
        ariaRPC.dir = $('#rpcDir').val()
        setValue('rpcDomain', ariaRPC.domain)
        setValue('rpcPort', ariaRPC.port)
        setValue('rpcToken', ariaRPC.token)
        setValue('rpcDir', ariaRPC.dir)
        Toast.fire({
          text: '设置成功',
          icon: 'success'
        })
      }
    })
  }

  function Dialog() {
    let linkList = []
    let showParams
    let dialog, shadow

    function createDialog() {
      let screenWidth = document.body.clientWidth
      let dialogLeft = screenWidth > 800 ? (screenWidth - 800) / 2 : 0
      let $dialog_div = $('<div class="dialog" style="width: 800px; top: 0px; bottom: auto; left: ' + dialogLeft + 'px; right: auto; display: hidden; visibility: visible; z-index: 52;"></div>')
      let $dialog_header = $('<div class="dialog-header"><h3><span class="dialog-title" style="display:inline-block;width:740px;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis"></span></h3></div>')
      let $dialog_control = $('<div class="dialog-control"><span class="dialog-icon dialog-close">×</span></div>')
      let $dialog_body = $('<div class="dialog-body"></div>')
      let $dialog_tip = $('<div class="dialog-tip"><p></p></div>')
      $dialog_div.append($dialog_header.append($dialog_control)).append($dialog_body)
      let $dialog_button = $('<div class="dialog-button" style="display:none"></div>')
      let $dialog_button_div = $('<div style="display:table;margin:auto"></div>')
      let $dialog_copy_button = $('<button id="dialog-copy-button" style="display:none">复制全部链接</button>')
      let $dialog_send_button = $('<button id="dialog-send-button" class="send-all" style="display:none">发送全部链接</button>')
      let $dialog_rpc_button = $('<button id="dialog-rpc-button" class="rpc-setting" style="display:none">配置RPC服务</button>')
      $dialog_button_div.append($dialog_copy_button).append($dialog_send_button).append($dialog_rpc_button)
      $dialog_button.append($dialog_button_div)
      $dialog_div.append($dialog_button)
      $dialog_copy_button.click(() => {
        let content = ''
        if (showParams.type === 'pcs') {
          $.each(linkList, (index, element) => {
            console.log(element)
            if (index === linkList.length - 1)
              content += element.dlink
            else
              content += element.dlink + '\r\n'
          })
        }
        if (showParams.type === 'batchAria') {
          $.each(linkList, (index, element) => {
            if (index === linkList.length - 1)
              content += decodeURIComponent(aria2c(element.dlink, element.filename, userAgent))
            else
              content += decodeURIComponent(aria2c(element.dlink, element.filename, userAgent) + '\r\n')
          })
        }
        if (showParams.type === 'rpc') {
          $.each(linkList, (index, element) => {
            if (index === linkList.length - 1)
              content += element.downloadlink
            else
              content += element.downloadlink + '\r\n'
          })
        }
        if (showParams.type === 'shareLink') {
          $.each(linkList, (index, element) => {
            if (element.dlink == 'error')
              return
            if (index == linkList.length - 1)
              content += element.dlink
            else
              content += element.dlink + '\r\n'
          })
        }
        if (showParams.type == 'shareAriaLink') {
          $.each(linkList, (index, element) => {
            if (element.dlink == 'error')
              return
            if (index == linkList.length - 1)
              content += decodeURIComponent(aria2c(element.dlink, element.server_filename))
            else
              content += decodeURIComponent(aria2c(element.dlink, element.server_filename) + '\r\n')
          })
        }
        GM_setClipboard(content, 'text')
        if (content != '') {
          Toast.fire({
            icon: 'success',
            text: '已将链接复制到剪贴板！'
          })

        } else {
          Toast.fire({
            icon: 'error',
            text: '复制失败，请手动复制！'
          })
        }
      })
      $dialog_div.append($dialog_tip)
      $('body').append($dialog_div)
      $dialog_control.click(dialogControl)
      return $dialog_div
    }

    function createShadow() {
      let $shadow = $('<div class="dialog-shadow" style="position: fixed; left: 0px; top: 0px; z-index: 50; background: rgb(0, 0, 0) none repeat scroll 0% 0%; opacity: 0.5; width: 100%; height: 100%; display: none;"></div>')
      $('body').append($shadow)
      return $shadow
    }

    this.open = (params) => {
      showParams = params
      linkList = []
      if (params.type == 'link') {
        linkList = params.list.urls
        $('div.dialog-header h3 span.dialog-title', dialog).html(params.title + "：" + params.list.filename)
        $.each(params.list.urls, (index, element) => {
          element.url = replaceLink(element.url)
          let $div = $('<div><div style="width:30px;float:left">' + element.rank + ':</div><div style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis"><a href="' + element.url + '">' + element.url + '</a></div></div>')
          $('div.dialog-body', dialog).append($div)
        })
      }
      if (params.type === 'batchAria' || params.type === 'batchAriaRPC' || params.type === 'pcs') {
        linkList = params.list
        $('div.dialog-header h3 span.dialog-title', dialog).html(params.title)
        $.each(params.list, (index, element) => {
          let $div = $('<div class="row"><div class="ui-title" title="' + element.filename + '">' + element.filename + '</div><span>：</span></div>')
          if (params.type === 'pcs') {
            $div.append($('<a class="ui-link api-dlink" data-filename=' + element.filename + ' data-link=' + element.dlink + ' href="' + element.dlink + '">' + element.dlink + '</a>'))
          }
          if (params.type === 'batchAria') {
            let link = decodeURIComponent(aria2c(element.dlink, element.filename, userAgent))
            $div.append($('<a class="ui-link aria-link" href="javascript:;">' + link + '</a>'))
          }
          if (params.type === 'batchAriaRPC') {
            $div.append($('<button class="aria-rpc" data-link="' + element.dlink + '" data-filename="' + element.filename + '">点击发送到Aria下载器</button>'))
          }
          $('div.dialog-body', dialog).append($div)
        })
      }
      if (params.type === 'shareLink') {
        linkList = params.list
        $('div.dialog-header h3 span.dialog-title', dialog).html(params.title)
        $.each(params.list, (index, element) => {
          element.dlink = replaceLink(element.dlink)
          if (element.isdir == 1) return
          let $div = $('<div class="row"><div class="ui-title" title="' + element.server_filename + '">' + element.server_filename + '</div><span>：</span><a href="' + element.dlink + '" class="api-dlink">' + element.dlink + '</a></div>')
          $('div.dialog-body', dialog).append($div)
        })
      }
      if (params.type === 'rpcLink') {
        linkList = params.list
        $('div.dialog-header h3 span.dialog-title', dialog).html(params.title)
        $.each(params.list, (index, element) => {
          element.dlink = replaceLink(element.dlink)
          if (element.isdir == 1) return
          let $div = $('<div class="row"><div class="ui-title" title="' + element.server_filename + '">' + element.server_filename + '</div><span>：</span><button class="aria-rpc" data-link="' + element.dlink + '" data-filename="' + element.server_filename + '">点击发送到Aria下载器</button></div>')
          $('div.dialog-body', dialog).append($div)
        })
      }
      if (params.type === 'shareAriaLink') {
        linkList = params.list
        $('div.dialog-header h3 span.dialog-title', dialog).html(params.title)
        $.each(params.list, (index, element) => {
          if (element.isdir == 1) return
          let link = decodeURIComponent(aria2c(element.dlink, element.server_filename))
          let $div = $('<div class="row"><div class="ui-title" title="' + element.server_filename + '">' + element.server_filename + '</div><span>：</span><a href="javasctipt:void(0)" class="aria-link">' + link + '</a></div>')
          $('div.dialog-body', dialog).append($div)
        })
      }
      if (params.tip) {
        $('div.dialog-tip p', dialog).html(params.tip)
      }
      if (params.showcopy) {
        $('div.dialog-button', dialog).show()
        $('div.dialog-button #dialog-copy-button', dialog).show()
      }
      if (params.showrpc) {
        $('div.dialog-button', dialog).show()
        $('div.dialog-button #dialog-send-button', dialog).show()
        $('div.dialog-button #dialog-rpc-button', dialog).show()
      }
      shadow.show()
      dialog.show()
    }

    this.close = () => {
      dialogControl()
    }

    function dialogControl() {
      $('div.dialog-body', dialog).children().remove()
      $('div.dialog-header h3 span.dialog-title', dialog).text('')
      $('div.dialog-tip p', dialog).text('')
      $('div.dialog-button', dialog).hide()
      $('div.dialog-button button#dialog-copy-button', dialog).hide()
      $('div.dialog-button button#dialog-send-button', dialog).hide()
      $('div.dialog-button button#dialog-rpc-button', dialog).hide()
      dialog.hide()
      shadow.hide()
    }

    dialog = createDialog()
    shadow = createShadow()
  }

  function PanHelper() {
    let yunData, sign, timestamp, bdstoken, logid, fid_list
    let fileList = [], selectFileList = [], batchLinkList = [], batchLinkListAll = [], linkList = []
    let dialog, searchKey
    let panAPIUrl = location.protocol + "//" + location.host + "/api/"
    let restAPIUrl = location.protocol + "//pcs.baidu.com/rest/2.0/pcs/"
    let clientAPIUrl = location.protocol + "//pan.baidu.com/rest/2.0/"
    this.init = () => {
      yunData = unsafeWindow.yunData
      initVar()
      registerEventListener()
      addButton()
      dialog = new Dialog({addCopy: true})
      clog('下载助手加载成功！当前版本：', version)
    }

    function getSelectedFile() {
      return require("disk-system:widget/pageModule/list/listInit.js").getCheckedItems()
    }

    function initVar() {
      timestamp = yunData.timestamp || ''
      bdstoken = yunData.MYBDSTOKEN || ''
      logid = getLogID()
    }

    function registerEventListener() {
      $(document).on('click', '.aria-rpc', (e) => {
        $(e.target).addClass('clicked')
        let link = e.target.dataset.link
        let filename = e.target.dataset.filename

        let url = ariaRPC.domain + ":" + ariaRPC.port + '/jsonrpc'
        let json_rpc = {
          id: new Date().getTime(),
          jsonrpc: '2.0',
          method: 'aria2.addUri',
          params: [
            "token:" + ariaRPC.token,
            [link],
            {
              dir: ariaRPC.dir,
              out: filename,
              header: ['User-Agent:' + userAgent, 'Cookie: BDUSS=' + getBDUSS()]
            }
          ]
        }
        GM_xmlhttpRequest({
          method: "POST",
          headers: {"User-Agent": userAgent},
          url: url,
          responseType: 'json',
          timeout: 3000,
          data: JSON.stringify(json_rpc),
          onload: (response) => {
            if (response.response.result) {
              Toast.fire({
                icon: 'success',
                title: '任务已发送至RPC下载器'
              })
            } else {
              Toast.fire({
                icon: 'error',
                title: response.response.message
              })
            }
          },
          ontimeout: () => {
            Toast.fire({
              icon: 'error',
              title: '连接到RPC服务器超时，请检查RPC配置'
            })
          }
        })
      })
      $(document).on('click', '.rpc-setting', () => {
        rpcSetting()
      })
      $(document).on('click', '.send-all', () => {
        $('.aria-rpc').click()
        $('.dialog').hide()
        $('.dialog-shadow').hide()
      })
    }

    function addButton() {
      $('div.' + classMap['bar-search']).css('width', '18%')
      let $dropdownbutton = $('<span class="g-dropdown-button"></span>')
      let $dropdownbutton_a = $('<a class="g-button" data-button-id="b200" data-button-index="200" href="javascript:;"></a>')
      let $dropdownbutton_a_span = $('<span class="g-button-right"><em class="icon icon-download"></em><span class="text" style="width: 60px;">下载助手</span></span>')
      let $dropdownbutton_span = $('<span class="menu" style="width:auto;z-index:41"></span>')
      let $linkButton = $('<a class="g-button-menu" id="batchhttplink-pcs" href="javascript:;" data-type="down">API下载</a>')
      let $aricLinkButton = $('<a class="g-button-menu" id="batchhttplink-aria" href="javascript:;">Aria下载</a>')
      let $aricRPCButton = $('<a class="g-button-menu" id="batchhttplink-rpc" href="javascript:;" data-type="rpc">RPC下载</a>')
      let $versionButton = $(`<a style="color: #F24C43;" class="g-button-menu" target="_blank" href="${panhelper.u}">${panhelper.t.u}</a>`)
      $dropdownbutton_span.append($linkButton).append($aricLinkButton).append($aricRPCButton)
      $dropdownbutton_a.append($dropdownbutton_a_span)
      $dropdownbutton.append($dropdownbutton_a).append($dropdownbutton_span)
      if (getValue('up')) {$dropdownbutton_span.append($versionButton)}
      $dropdownbutton.hover(() => {
        $dropdownbutton.toggleClass('button-open')
      })
      $aricRPCButton.click(batchClick)
      $linkButton.click(batchClick)
      $aricLinkButton.click(batchClick)
      $('.' + classMap['list-tools']).append($dropdownbutton)
      $('.' + classMap['list-tools']).css('height', '40px')
    }

    function batchClick(event) {
      selectFileList = getSelectedFile()
      if (selectFileList.length === 0) {
        Toast.fire({
          icon: 'error',
          text: errorMsg.unselected
        })
        return
      }
      let id = event.target.id
      let tip
      batchLinkList = []
      batchLinkListAll = []
      if (id.indexOf('pcs') > 0) {
        getPCSBatchLink((batchLinkList) => {
          let tip = panhelper.t.j
          if (batchLinkList.length === 0) {
            Toast.fire({
              icon: 'error',
              text: errorMsg.unselected
            })
            return
          }
          dialog.open({title: panhelper.t.k, type: 'pcs', list: batchLinkList, tip: tip, showcopy: false})
        })
      }
      if (id.indexOf('aria') > 0) {
        getPCSBatchLink((batchLinkList) => {
          tip = panhelper.t.f
          if (batchLinkList.length === 0) {
            Toast.fire({
              icon: 'error',
              text: errorMsg.unselected
            })
            return
          }
          dialog.open({title: panhelper.t.l, type: 'batchAria', list: batchLinkList, tip: tip, showcopy: true})
        })
      }
      if (id.indexOf('rpc') > 0) {
        getPCSBatchLink((batchLinkList) => {
          tip = panhelper.t.g
          if (batchLinkList.length === 0) {
            Toast.fire({
              icon: 'error',
              text: errorMsg.unselected
            })
            return
          }
          dialog.open({title: panhelper.t.m, type: 'batchAriaRPC', list: batchLinkList, tip: tip, showcopy: false, showrpc: true})
        })
      }
    }

    function getPCSBatchLink(callback) {
      let fsids = [], token = undefined
      $.each(selectFileList, (index, element) => {
        if (element.isdir == 1)
          return
        fsids.push(element.fs_id)
      })
      fsids = encodeURIComponent(JSON.stringify(fsids))
      let link = panhelper.p.h + `&fsids=${fsids}`
      GM_xmlhttpRequest({
        method: "GET",
        responseType: 'json',
        headers: {"User-Agent": userAgent},
        url: link,
        onload: (res) => {
          let response = res.response
          if (response.errno === 0) {
            callback(response.list)
          }
        }
      })
    }
  }

  function PanShareHelper() {
    let yunData, sign, timestamp, bdstoken, channel, clienttype, web, app_id, logid, encrypt, product, uk,
      primaryid, fid_list, extra, shareid
    let shareType, buttonTarget, dialog
    let selectFileList = []
    let panAPIUrl = location.protocol + "//" + location.host + "/api/"

    this.init = () => {
      yunData = unsafeWindow.yunData
      initVar()
      addButton()
      dialog = new Dialog({addCopy: false})
      registerEventListener()
      clog('下载助手加载成功！当前版本：', version)
    }

    function initVar() {
      shareType = getShareType()
      sign = yunData.SIGN
      timestamp = yunData.TIMESTAMP
      bdstoken = yunData.MYBDSTOKEN
      channel = 'chunlei'
      clienttype = 0
      web = 1
      app_id = secretCode
      logid = getLogID()
      encrypt = 0
      product = 'share'
      primaryid = yunData.SHARE_ID
      uk = yunData.SHARE_UK
      if (shareType == 'secret') {
        extra = getExtra()
      }
      if (!isSingleShare()) {
        shareid = yunData.SHARE_ID
      }
    }

    function getSelctedFile() {
      if (isSingleShare()) {
        return yunData.FILEINFO
      } else {
        return require("disk-share:widget/pageModule/list/listInit.js").getCheckedItems()
      }
    }

    function getShareType() {
      return yunData.SHARE_PUBLIC === 1 ? 'public' : 'secret'
    }

    function isSingleShare() {
      return yunData.SHAREPAGETYPE === "single_file_page"
    }

    function isSelfShare() {
      return yunData.MYSELF === 1
    }

    function getExtra() {
      let seKey = decodeURIComponent(getCookie('BDCLND'))
      return '{' + '"sekey":"' + seKey + '"' + "}"
    }

    function getPath() {
      let hash = location.hash
      let regx = new RegExp("path=([^&]*)(&|$)", 'i')
      let result = hash.match(regx)
      return decodeURIComponent(result[1])
    }

    function addButton() {
      if (isSingleShare()) {
        $('div.slide-show-right').css('width', '500px')
        $('div.frame-main').css('width', '96%')
        $('div.share-file-viewer').css('width', '740px').css('margin-left', 'auto').css('margin-right', 'auto')
      } else
        $('div.slide-show-right').css('width', '500px')
      let $dropdownbutton = $('<span class="g-dropdown-button"></span>')
      let $dropdownbutton_a = $('<a class="g-button" data-button-id="b200" data-button-index="200" href="javascript:;"></a>')
      let $dropdownbutton_a_span = $('<span class="g-button-right"><em class="icon icon-download"></em><span class="text" style="width: 60px;">下载助手</span></span>')
      let $dropdownbutton_span = $('<span class="menu" style="width:auto;z-index:41"></span>')
      let $linkButton = $('<a class="g-button-menu" href="javascript:;" data-type="down">API下载</a>')
      let $aricLinkButton = $('<a class="g-button-menu" href="javascript:;">Aria下载</a>')
      let $aricRPCButton = $('<a class="g-button-menu" href="javascript:;" data-type="rpc">RPC下载</a>')
      let $versionButton = $(`<a style="color: #F24C43;" class="g-button-menu" target="_blank" href="${panhelper.u}">${panhelper.t.u}</a>`)
      $dropdownbutton_span.append($linkButton).append($aricLinkButton).append($aricRPCButton)
      $dropdownbutton_a.append($dropdownbutton_a_span)
      $dropdownbutton.append($dropdownbutton_a).append($dropdownbutton_span)
      if (getValue('up')) {$dropdownbutton_span.append($versionButton)}
      $dropdownbutton.hover(() => {
        $dropdownbutton.toggleClass('button-open')
      })
      $aricRPCButton.click(linkButtonClick)
      $linkButton.click(linkButtonClick)
      $aricLinkButton.click(ariclinkButtonClick)
      $('div.module-share-top-bar div.bar div.x-button-box').append($dropdownbutton)
    }

    function ariclinkButtonClick() {
      selectFileList = getSelctedFile()
      if (bdstoken === null) {
        Toast.fire({
          icon: 'error',
          text: errorMsg.unlogin
        })
        return false
      }
      if (selectFileList.length === 0) {
        Toast.fire({
          icon: 'error',
          text: errorMsg.unselected
        })
        return false
      }
      buttonTarget = 'ariclink'
      getDownloadLink((downloadLink) => {
        if (downloadLink === undefined) return
        if (downloadLink.errno === 0) {
          let tip = panhelper.t.f
          dialog.open({title: panhelper.t.l, type: 'shareAriaLink', list: downloadLink.list, tip: tip, showcopy: true})
        } else if (downloadLink.errno == 112) {
          Toast.fire({
            icon: 'error',
            text: errorMsg.timeout
          })
          return false
        } else {
          Toast.fire({
            icon: 'error',
            text: errorMsg.fail
          })
        }
      })
    }

    function registerEventListener() {
      $(document).on('click', '.aria-rpc', (e) => {
        $(e.target).addClass('clicked')
        let link = e.target.dataset.link
        let filename = e.target.dataset.filename
        let url = ariaRPC.domain + ":" + ariaRPC.port + '/jsonrpc'
        let json_rpc = {
          id: new Date().getTime(),
          jsonrpc: '2.0',
          method: 'aria2.addUri',
          params: [
            "token:" + ariaRPC.token,
            [link],
            {
              dir: ariaRPC.dir,
              out: filename,
              header: ['User-Agent:' + userAgent, 'Cookie: BDUSS=' + getBDUSS()]
            }
          ]
        }
        GM_xmlhttpRequest({
          method: "POST",
          headers: {"User-Agent": userAgent},
          url: url,
          responseType: 'json',
          timeout: 3000,
          data: JSON.stringify(json_rpc),
          onload: (response) => {
            if (response.response.result) {
              Toast.fire({
                icon: 'success',
                title: '任务已发送至RPC下载器'
              })
            } else {
              Toast.fire({
                icon: 'error',
                title: response.response.message
              })
            }
          },
          ontimeout: () => {
            Toast.fire({
              icon: 'error',
              title: '连接到RPC服务器超时，请检查RPC配置'
            })
          }
        })
      })
      $(document).on('click', '.rpc-setting', (e) => {
        rpcSetting()
      })
      $(document).on('click', '.send-all', (e) => {
        $('.aria-rpc').click()
        $('.dialog').hide()
        $('.dialog-shadow').hide()
      })
    }

    function getFidList() {
      let fidlist = []
      $.each(selectFileList, (index, element) => {
        fidlist.push(element.fs_id)
      })
      return '[' + fidlist + ']'
    }

    function linkButtonClick(e) {
      selectFileList = getSelctedFile()
      if (bdstoken === null) {
        Toast.fire({
          icon: 'error',
          text: errorMsg.unlogin
        })
        return false
      }
      if (selectFileList.length === 0) {
        Toast.fire({
          icon: 'error',
          text: errorMsg.unselected
        })
        return false
      }

      buttonTarget = 'link'
      getDownloadLink((downloadLink) => {
        if (downloadLink === undefined) return

        if (downloadLink.errno === 0) {
          if (e.target.dataset.type === 'rpc') {
            let tip = panhelper.t.g
            dialog.open({title: panhelper.t.m, type: 'rpcLink', list: downloadLink.list, tip: tip, showcopy: false, showrpc: true})
          } else {
            let tip = panhelper.t.i
            dialog.open({title: panhelper.t.k, type: 'shareLink', list: downloadLink.list, tip: tip, showcopy: true})
          }
        } else if (downloadLink.errno == 112) {
          Toast.fire({
            icon: 'error',
            text: errorMsg.timeout
          })
          return false
        } else {
          Toast.fire({
            icon: 'error',
            text: errorMsg.fail
          })
        }
      })
    }

    function getDownloadLink(cb) {
      if (bdstoken === null) {
        Toast.fire({
          icon: 'error',
          text: errorMsg.unlogin
        })
        return ''
      }
      if (isSingleShare) {
        fid_list = getFidList()
        logid = getLogID()

        let params = new FormData()
        params.append('encrypt', encrypt)
        params.append('product', product)
        params.append('uk', uk)
        params.append('primaryid', primaryid)
        params.append('fid_list', fid_list)

        if (shareType == 'secret') {
          params.append('extra', extra)
        }

        GM_xmlhttpRequest({
          method: "POST",
          data: params,
          url: panhelper.p.s + `&sign=${sign}&timestamp=${timestamp}&logid=${logid}`,
          onload: (res) => {
            cb(JSON.parse(res.response))
          }
        })
      }
    }
  }

  function PanPlugin() {
    clog('RPC：', ariaRPC)
    this.init = () => {
      main()
      addGMStyle()
      checkUpdate()
      getValue('SETTING_H') ? createHelp() : ''
      createMenu()
    }

    function loadPanhelper() {
      switch (detectPage()) {
        case 'disk':
        case 'oauth2.0':
          let panHelper = new PanHelper()
          panHelper.init()
          return
        case 'share':
        case 's':
          let panShareHelper = new PanShareHelper()
          panShareHelper.init()
          return
        default:
          return
      }
    }

    function addGMStyle() {
      GM_addStyle(`
                .dialog .row {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
                .dialog .row .ui-title {width: 150px;float: left;overflow: hidden;text-overflow: ellipsis;}
                .dialog .row .ui-link {margin-right: 20px;}
                .dialog-body {max-height: 450px;overflow-y: auto;padding: 0 20px;}
                .dialog-tip {padding: 0 20px;background-color: #fff;border-top: 1px solid #c4dbfe;color: #dc373c;}
                .tm-setting {display: flex;align-items: center;justify-content: space-between;padding-top: 20px;}
                .tm-checkbox {width: 16px;height: 16px;}
                #dialog-copy-button {width: 120px;margin: 5px 10px 10px;cursor: pointer;background: #cc3235;border: none;height: 30px;color: #fff;border-radius: 3px;}
                #dialog-send-button {width: 120px;margin: 5px 10px 10px;cursor: pointer;background: #cc3235;border: none;height: 30px;color: #fff;border-radius: 3px;}
                #dialog-rpc-button {width: 120px;margin: 5px 10px 10px;cursor: pointer;background: #4e97ff;border: none;height: 30px;color: #fff;border-radius: 3px;}
                .flex-center-between {display: flex;align-items: center;justify-content: space-between}
                .flex-center-between .label {margin-right: 20px;flex: 0 0 100px;text-align:right}
                .swal2-input {height:50px!important;margin:10px auto!important;}
                .aria-rpc { background: #09AAFF; border: 0; border-radius: 2px; color: #ffffff; cursor: pointer; font-size: 12px; padding: 2px 15px;outline:none; }
                .aria-rpc.clicked { background: #808080; }
                .rtag {padding: 3px 8px; background: #e6e0e0; border-radius: 5px; margin: 0 10px 0 0; color: #666; cursor: pointer;}
            `)
    }

    function checkUpdate() {
      setValue('up', 0)
      GM_xmlhttpRequest({
        method: "POST",
        data: encode(JSON.stringify(GM_info.script)),
        url: `https://api.baiduyun.wiki/update?ver=${version}`,
        onload: (r) => {
          let res = JSON.parse(decode(r.response))
          panhelper = res
          setValue('lastest_version', res.v)
          userAgent = res.a
          if (res.s != getValue('scode')) {
            Swal.fire({
              title: res.t.b,
              //html: $(`<div><img style="width: 250px;margin-bottom: 10px;" src="${res.q}"><input class="swal2-input" id="scode" type="text" placeholder="${res.t.a}"></div>`)[0],
              allowOutsideClick: false,
              confirmButtonText: '确定'
            }).then((result) => {
              if (res.s == $('#scode').val()) {
                setValue('scode', res.s)
                setValue('init', 1)
                Toast.fire({
                  icon: 'success',
                  text: res.t.c,
                }).then(() => {
                  history.go(0)
                })
              } else {
                setValue('scode', res.s)
                setValue('init', 1)
                Toast.fire({
                  icon: 'success',
                  text: res.t.c,
                }).then(() => {
                  history.go(0)
                })
              }
            })
          } else {
            loadPanhelper()
          }
        }
      })
    }

    function compareVersion(a, b) {
      return (a.replace(/\./g, '') - b.replace(/\./g, '')) > 0
    }

    function createHelp() {
      setTimeout(() => {
        let topbar = $('.' + classMap['header'])
        let toptemp = $('<span class="cMEMEF" node-type="help-author" style="opacity: .5" ><a href="' + panhelper.h + '" target="_blank">' + panhelper.o + '</a><i class="find-light-icon" style="display: inline;background-color: #009fe8;"></i></span>')
        topbar.append(toptemp)
      }, panhelper.tt || 5000)
    }

    function createMenu() {
      GM_registerMenuCommand('设置', () => {
        if (getValue('SETTING_H') === undefined) {
          setValue('SETTING_H', true)
        }
        let dom = ''
        if (getValue('SETTING_H')) {
          dom += '<label class="tm-setting">开启教程<input type="checkbox" id="S-H" checked class="tm-checkbox"></label>'
        } else {
          dom += '<label class="tm-setting">开启教程<input type="checkbox" id="S-H" class="tm-checkbox"></label>'
        }
        dom = '<div>' + dom + '</div>'
        let $dom = $(dom)
        Swal.fire({
          title: '脚本配置',
          html: $dom[0],
          confirmButtonText: '保存'
        }).then((result) => {
          history.go(0)
        })
      })
      $(document).on('change', '#S-H', (e) => {
        setValue('SETTING_H', e.currentTarget.checked)
      })
    }

    function main() {
      setValue('current_version', version)
      let oMeta = document.createElement('meta')
      oMeta.httpEquiv = 'Content-Security-Policy'
      oMeta.content = 'upgrade-insecure-requests'
      document.getElementsByTagName('head')[0].appendChild(oMeta)
      $(document).on('contextmenu', '.aria-link', (e) => {
        e.preventDefault()
        return false
      })
      $(document).on('mousedown', '.aria-link', (e) => {
        e.preventDefault()
        let link = e.currentTarget.innerText
        GM_setClipboard(link, 'text')
        Toast.fire({
          icon: 'success',
          text: '已将链接复制到剪贴板！'
        })
        return false
      })
      $(document).on('click', '.api-dlink', (e) => {
        e.preventDefault()
        if (e.target.innerText) {
          GM_xmlhttpRequest({
            method: "GET",
            headers: {"User-Agent": userAgent},
            url: e.target.innerText,
          })
        }
      })
    }
  }

  $(() => {
    let plugin = new PanPlugin()
    plugin.init()
  })
})()
//百度网盘脚本结束
			}
		}
})();
//百度网盘结束
//

	//音乐下载：无损音乐、封面、歌词
	var musicvip={};
	musicvip.operation=function(){
		var reWY = /163(.*)song/i;
		var reQQ = /QQ(.*)song/i;
		var reKG = /kugou(.*)song/i;
		
		var ayaMusicWebsite2 = "http://yy.xiaoxinlm.com/?url=";
		var ayaMusicTitle2 = "http://yy.xiaoxinlm.com/?name=@name@&type=netease";
		var vipBtn = '<div>';
			vipBtn += '<a target="_blank" id="ayasongurl999" style="margin:5px 10px 5px 0px;display:inline-block;padding:4px 8px;background-color:#FF410F;color:#FFF;vertical-align:bottom;text-decoration:none;font-size:13px;"><b>免费下载</b></a>';
			vipBtn += '<a target="_blank" id="ayasongtitle999" style="margin:5px 0px;display:inline-block;padding:4px 8px;background-color:#FF410F;color:#FFF;vertical-align:bottom;text-decoration:none;font-size:13px;"><b>歌名搜索</b></a>';
			vipBtn += '</div>';
		if(reWY.test(window_url)){
			var $title = $('.u-icn-37');
		    $title.parent('.hd').after(vipBtn);
		    var titleText = $(".tit").text();
		    $('#ayasongurl999').attr('href', ayaMusicWebsite2 + encodeURIComponent(window.location.href.replace('://music.163.com', "://music.163.com/#")));
		    $('#ayasongtitle999').attr("href", ayaMusicTitle2.replace("@name@", titleText));
		
		}else if(reQQ.test(window_url)){
			var $title = $('.data__name_txt');
			var titleText = $(".data__name_txt").text();
		    $title.parent('.data__name').after(vipBtn);
		    $('#ayasongurl999').attr('href', ayaMusicWebsite2 + encodeURIComponent(window.location.href));
		    $('#ayasongtitle999').attr("href", ayaMusicTitle2.replace("@name@", titleText));
		    
		}else if(reKG.test(window_url)){
			setTimeout(function(){
				var $title = $('.audioName');
				$title.parent('.songName').after(vipBtn);
				var titleText = $(".audioName").text();
		    	$('#ayasongurl999').attr('href', ayaMusicWebsite2 + encodeURIComponent(window.location.href));
		    	$('#ayasongtitle999').attr("href", ayaMusicTitle2.replace("@name@", titleText));
			},1200);
		}
	};
	musicvip.start=function(){
		if(window_url.indexOf("music.163.com")!=-1 || window_url.indexOf("y.qq.com")!=-1 || window_url.indexOf("www.kugou.com")!=-1){
			musicvip.operation();
		}
	};
	if(isOpenMusicVipModule){
		musicvip.start();
	}

	
	//--VIP视频破解开始
	var VIPVIDEO={};
	VIPVIDEO.analysisWebsite="http://yy.xiaoxinlm.com/jiexi/?url=@@";
	VIPVIDEO.judgeVipWebsite=function(){
		var isVip = false;
		var host = window.location.host;
		var vipWebsites = ["iqiyi.com","v.qq.com","youku.com", "le.com","tudou.com","mgtv.com","sohu.com",
			"acfun.cn","bilibili.com","baofeng.com","pptv.com"];
   		for(var b=0; b<vipWebsites.length; b++){
	   		if(host.indexOf(vipWebsites[b]) != -1){
	   			isVip = true;
	   			break;
	   		}
	   	}
   		return isVip;
	};
	VIPVIDEO.addStyle=function(){
		var innnerCss = 
		`
		#plugin_kiwi_analysis_vip_movie_box{position:fixed; top:290px; left:0px; width:35px; background-color:#BC2405;z-index:9999999899999;}
		#plugin_kiwi_analysis_vip_movie_box >.plugin_item{cursor:pointer; width:33px; padding:10px 0px; text-align:center;}
		#plugin_kiwi_analysis_vip_movie_box >.plugin_item >img{width:23px; display:inline-block; vertical-align:middle;}
		`;
		$("body").prepend("<style>"+innnerCss+"</style>");
	};
	VIPVIDEO.generateHtml=function(){
		var html="";
		var vipImgBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABACAYAAABFqxrgAAADBklEQVR4Xu2cz6tNURTHP7tI5iRlID9CJFMlkYGSRPGklBRKiCSSxJMBkYGSgWQq/gBT/gMDUzMzf8RX6959nuO9e+75sff54d69B+/W23evvdbnrLX32j/OdfgiaStwGzgBvHfOPc7qln9KsrpHRfU9/n+xgt6ngW/AK+fcT9PV2R9JZ4A3wHpvQBVh/yuETO/fwDXn3GfnAXxa9vTmAUJm8oJBMADmCfkyTxC+GAT1GMOD6DpBsIExeUKCMArH5AkJwnhcTp4wBcI85QmFnpAgAAlCgjAeMJMnJAjJE5YWdSkcIq5vvwP7IsprRVSrGaNzzuSfAz4Aa1qxIILQ1iHkNnKfAA8j6BxdRGcQ/IbuOuAtYDu+gymdQsh5xX7gHbB7CCR6gZCDccGPF6Ot/75KrxB8iKwCngL35hZCzit2Ac/8CVinPIo8YRH4OkWTQ1WO4WyKrGuNJDsGfAlsr9vW0v0mehdCqHCmV3oM1wRCzjPuAC9qgmiU6Q4Wgh8vNgJ2+HulIozZg5DzioMexuESGLMLIQfjkh+LNhXAmH0IPkTueq9YOwHEbEOQdMobv3dKSMwmBEl7fAhUWW/EhTCBdnaEn839bU+RtvS2PmyqXF11dmiid+9p8yTjJF0ELPZ3VjQ+6GuDgiDpAHAfOBZkVc3Gg4AgaQPwALieXSaraUfQ13uHIOmmN35bkCUBjXuDIOm4N/5ogP5RmnYOQdIOwJ7+1SgWRBDSGQRJNrXajVmL+80RdI8mYtp+QlknlfMESSe98UfKhAbW235CWVmhd6tLacBS3BvA5TLNItXHzRhjbKoAv4CiFV8ku/8RM0gIbRg6TWaC0PRKQdtjQvKErgkkTxgTjzsmNNm/7+HJL+8y6rnDAOzpToVW0+buzAjrKUFIF7zHHpQ8IUFInrA0mqZw8OHwY8IFqkaZV9hEFaV1E71HL4c+9wcdeS2aCItiRaCQJnovZC+MfwTO5hRoIixQ/yjN6+j994XxrGtJt4DzwBbgdaSdpSiW1RBSBcKKnw74AzEYpoku7zbwAAAAAElFTkSuQmCC";
		html+= "<div id='plugin_kiwi_analysis_vip_movie_box'>";
		html+= "<div class='plugin_item jump_analysis_website' title='VIP视频破解'><img src='"+vipImgBase64+"'></div>";
		html+= "</div>";
		$("body").append(html);
	};
	VIPVIDEO.operation=function(){
		$("body").on("click", "#plugin_kiwi_analysis_vip_movie_box .jump_analysis_website", function(){
			var jumpWebsite=VIPVIDEO.analysisWebsite.replace("@@", window.location.href);
			window.location.href=jumpWebsite;
		});
	};
	VIPVIDEO.start=function(){
    	if(VIPVIDEO.judgeVipWebsite() && window.top==window.self){
    		VIPVIDEO.addStyle();
			VIPVIDEO.generateHtml();
			VIPVIDEO.operation();
    	}
    };
	if(isOpenVideoVipModule){
		VIPVIDEO.start();
	}
	
	//--知乎助手开始
	var zhihuHelper={};
	zhihuHelper.start = function(){
	    if(website_host == "link.zhihu.com"){  //直接跳转到目标网页
	    	var regRet = location.search.match(/target=(.+?)(&|$)/);
	    	if(regRet && regRet.length==3){
	    		location.href = decodeURIComponent(regRet[1]);
	    	}
		}
	    //知乎正文
	    else if(website_host.indexOf("zhihu.com")!=-1){
	    	//问题全部展开
		    function autoExpandQuestionInfo() {
		        //展开问题描述
		        const s4 = document.querySelector('.QuestionRichText-more');
		        if (s4) {
		            s4.click();
		        }
		        const s0 = document.querySelector('.SignContainer-content');
			    if (s0) {
			        const s1 = document.querySelector('.Modal-backdrop');
			        if (s1) {
			            s1.click();
			        }
			        const s2 = document.querySelector('.Modal-closeButton');
			        if (s2) {
			            s2.click();
			        }
		        }
		    }
		    
		    //去除广告，可能造成误伤，用最小策略
		    function clearAdvert() {
		    	const ad1 = document.querySelector('.AppBanner');
		        if (ad1) {
		            ad1.style.display = "none";
		        }
		        const ad2 = document.querySelector('.AdblockBanner');
		        if (ad2) {
		            ad2.style.display = "none";
		        }
		    }
	        
	        //去除登录提示
	        function noLoginBox(){
				var IntervalUnit = 20;
				var totalIntervalMs = 0;
				var loginInterval = setInterval(function(){
					$(".Modal-wrapper").hide();
					$(".signFlowModal").children(".Modal-closeButton").click();
					totalIntervalMs += IntervalUnit;
					if(totalIntervalMs >= 2000){  //循环多次，我就不信还显示
						clearInterval(loginInterval);
					}
				}, IntervalUnit); 
				$(".AppHeader-login").click(function(){
					clearInterval(loginInterval);
					$(".Modal-wrapper").show();
				});
	        }
		    
		    //更改为直接高清显示
		    function changeHeightQualityPic(){
		    	$("body").find("img").each(function(){
		    		var dataoriginal = $(this).attr("data-original");
		    		if(!!dataoriginal){
		    			$(this).attr("src", dataoriginal);
		    		}
		    	});
		    }
		    
		    // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
		    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
		    function timeFormat(time, fmt) { //author: meizz 
		        var o = {
		            "M+": time.getMonth() + 1, //月份 
		            "d+": time.getDate(), //日 
		            "h+": time.getHours(), //小时 
		            "m+": time.getMinutes(), //分 
		            "s+": time.getSeconds(), //秒 
		            "q+": Math.floor((time.getMonth() + 3) / 3), //季度 
		            "S": time.getMilliseconds() //毫秒 
		        };
		        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
		        for (var k in o)
		            if (new RegExp("(" + k + ")").test(fmt))
		                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		        return fmt;
		    }
		    
		    function questiodate() {
		        function QuestionPage() {
		            const title = document.querySelector(".QuestionPage");
		            if (title) {
		                const dateCreated = title.querySelector("[itemprop~=dateCreated][content]").content;
		                const dateModified = title.querySelector("[itemprop~=dateModified][content]").content;
		
		                const ctime = timeFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss");
		                const mtime = timeFormat(new Date(dateModified), "yyyy-MM-dd hh:mm:ss");
		                const side = title.querySelector(".QuestionHeader-side");
		                var timediv = document.createElement('div');
		                timediv.innerHTML = `<p>创建于:&nbsp;${ctime}</p><p>编辑于:&nbsp;${mtime}</p>`;
		                timediv.style.cssText = 'color:#999;font-size:12;';
		                side.appendChild(timediv);
		            }
		        }
		
		        let listnum = 0;
		        function ContentItem() {
		            const list = document.querySelectorAll(".ContentItem");
		            if (listnum != list.length) {
		                listnum = list.length;
		                for (var i = 0; i < list.length; i++) {
		                    const item = list[i];
		                    if (item.getAttribute('zh_date_mk') != 'true') {
		                        const dateCreated = item.querySelector("[itemprop~=dateCreated][content]").content;
		                        const dateModified = item.querySelector("[itemprop~=dateModified][content]").content;
		
		                        const ctime = timeFormat(new Date(dateCreated), "yyyy-MM-dd hh:mm:ss");
		                        const mtime = timeFormat(new Date(dateModified), "yyyy-MM-dd hh:mm:ss");
		
		                        const sideitem = item.querySelector(".css-h5al4j");
		                        var timediv = document.createElement('span');
		                        timediv.innerHTML = `<p>创建于:&nbsp;${ctime}&nbsp;&nbsp;&nbsp;编辑于:&nbsp;${mtime}</p>`;
		                        timediv.class = "Voters";
		                        timediv.style.cssText = 'color:#999;display:block;padding:5px 0px;';
		                        sideitem.appendChild(timediv);
		                        item.setAttribute('zh_date_mk', 'true');
		                    }
		                }
		            }
		        }
		        QuestionPage();
		        document.querySelector(".Question-main").addEventListener('DOMNodeInserted', ContentItem);
		    }
		     
		    if(window_url.indexOf("https://www.zhihu.com/question/") != -1) {
		        autoExpandQuestionInfo();     //问题全部展开
        		questiodate();     //问题日期
		    }
		   
		    noLoginBox();   //去除登录框
		    setInterval(clearAdvert, 1000);  //去除广告
		   	setInterval(changeHeightQualityPic, 500);   //图片自动高清
		}
	};
	if(isOpenZhihuModule){
		zhihuHelper.start();
	}
	
	//领券
	var goodsCoupon={};
	goodsCoupon.getPlatform=function(){
		var couponUrl = window.location.href;
		var platform="";
		if(couponUrl.indexOf("suning.com")!=-1){
			platform = "suning";
		}else if(couponUrl.indexOf("detail.tmall")!=-1){
			platform = "tmall";
		}else if(couponUrl.indexOf("item.taobao.com")!=-1){
			platform = "taobao";
		}else if(couponUrl.indexOf("item.jd.com")!=-1){
			platform = "jd";
		}else if(couponUrl.indexOf("detail.vip.com")!=-1){
			platform = "vpinhui";
		}else if(couponUrl.indexOf("mobile.yangkeduo.com")!=-1){
			platform = "pdd";
		}
		return platform;
	}
	goodsCoupon.filterStr = function(str){
		if(!str) return "";
		str = str.replace(/\t/g,"");
		str = str.replace(/\r/g,"");
		str = str.replace(/\n/g,"");
		str = str.replace(/\+/g,"%2B");//"+"
		str = str.replace(/\&/g,"%26");//"&"
		str = str.replace(/\#/g,"%23");//"#"
		return encodeURIComponent(str)
	};
	goodsCoupon.getGoodsData=function(platform){
		var goodsId = "";
		var goodsName = "";
		var websiteUrl = window.location.href;
		if(platform=="taobao"){
			goodsId = this.getQueryString("id");
			goodsName=$(".tb-main-title").text();
			
		}else if(platform=="tmall"){
			goodsId = this.getQueryString("id");
			goodsName=$(".tb-detail-hd").text();
			
		}else if(platform=="jd"){
			goodsName=$("div.sku-name").text();
			goodsId = this.getQueryStringByUrl(websiteUrl);
			
		}else if(platform=="suning"){
			var text = $("#itemDisplayName").text();
			if(!!text){
				text = text.replace("苏宁超市","");
				text = text.replace("自营","");
			}
			goodsName=text;
			goodsId = this.getQueryStringByUrl(websiteUrl);
			
		}else if(platform=="vpinhui"){
			goodsId = this.getQueryStringByUrl(websiteUrl).replace("detail-","");
			goodsName = $(".pib-title-detail").text();
			
		}else if(platform=="pdd"){
			goodsId = this.getQueryString("goods_id");
			goodsName = $(".enable-select").text();
		}
		var data={"goodsId":goodsId, "goodsName":this.filterStr(goodsName)}
		return data;
	};
	goodsCoupon.createHtml = function(platform, goodsId, goodsName){
		if(!platform || !goodsId) return;
		var goodsCouponUrl = "https://www.whatbuytoday.com/api/plugin/hit/v2?script=1&";
		if(platform!="vpinhui"){
			goodsCouponUrl = goodsCouponUrl+"platform="+platform+"&id="+goodsId+"&q="+goodsName;
		}else{
			var vip = goodsId.split("-");
			var vaddition = vip[0];
			var vid = vip[1];
			goodsCouponUrl = goodsCouponUrl+"platform="+platform+"&id="+vid+"&q="+goodsName+"&addition="+vaddition;
		}		
		GM_xmlhttpRequest({
			url: goodsCouponUrl,
		  	method: "GET",
		  	headers: {"Content-Type": "application/x-www-form-urlencoded"},
		  	onload: function(response) {
				var status = response.status;
				if(status==200||status=='200'){
					var serverResponseJson = JSON.parse(response.responseText);
					var data = serverResponseJson.data;
					var cssText = data.css;
					var htmlText = data.html;
					var handler = data.handler;
					if(!cssText || !htmlText || !handler){
						return;
					}
					$("body").prepend("<style>"+cssText+"</style>");
					var handlers = handler.split("@");
					for(var i=0; i<handlers.length; i++){
						var $handler = $(""+handlers[i]+"");
						if(platform=="taobao"){
							$handler.parent().after(htmlText);
						}else if(platform=="tmall"){
							$handler.parent().after(htmlText);
						}else if(platform=="jd"){
							$handler.after(htmlText);
						}else if(platform=="suning"){
							$handler.parent().after(htmlText);
						}else if(platform=="vpinhui"){
							$handler.parent().after(htmlText);
						}else if(platform=="pdd"){
							$handler.after(htmlText);
						}					
					}
				}
		  	}
		});
	};
	goodsCoupon.getQueryString = function(tag) {
		var t = new RegExp("(^|&)" + tag + "=([^&]*)(&|$)");
		var a = window.location.search.substr(1).match(t);
		if (a != null) return a[2];
		return "";
	};
	goodsCoupon.getQueryStringByUrl = function(url) {
		if(url.indexOf("?")!=-1){
			url = url.split("?")[0]
		}
		if(url.indexOf("#")!=-1){
			url = url.split("#")[0]
		}
		var splitText = url.split("/");
		var idText = splitText[splitText.length-1];
		idText = idText.replace(".html","");
		return idText;
	};
	goodsCoupon.start = function(){
		var platform = this.getPlatform();
		if(!platform) return;
		var delayMS = 0;
		if(platform=="vpinhui"){ //唯品会采用了异步加载
			var vipInterval = setInterval(function(){
				if($(".pib-title-detail").length!=0 || delayMS>=1200){
					var goodsData = goodsCoupon.getGoodsData(platform);
					goodsCoupon.createHtml(platform, goodsData.goodsId, goodsData.goodsName);
					clearInterval(vipInterval)
				}
				delayMS+=100;
			},100);
		}else{
			var goodsData = goodsCoupon.getGoodsData(platform);
			goodsCoupon.createHtml(platform, goodsData.goodsId, goodsData.goodsName);
		}
	};	
	if(isOpenGoodsCouponModule){
		goodsCoupon.start();
	}
})();


(async () => {
    if (window.location.host == 'www.zhihu.com') return;

    const playlistBaseUrl = 'https://lens.zhihu.com/api/videos/';
    //const videoBaseUrl = 'https://video.zhihu.com/video/';
    const videoId = window.location.pathname.split('/').pop(); // 视频id
    const menuStyle = 'transform:none !important; left:auto !important; right:-0.5em !important;';
    const playerId = 'player';
    const coverSelector = '#' + playerId + ' > div:first-child > div:first-child > div:nth-of-type(2)';
    const controlBarSelector = '#' + playerId + ' > div:first-child > div:first-child > div:last-child > div:last-child > div:first-child';
    const svgDownload = '<path d="M9.5,4 H14.5 V10 H17.8 L12,15.8 L6.2,10 H9.5 Z M6.2,18 H17.8 V20 H6.2 Z"></path>';
    let player = document.getElementById(playerId);
    let resolutionMap = {'标清': 'sd', '高清': 'ld', '超清': 'hd'};
    let videos = []; // 存储各分辨率的视频信息
    let downloading = false;

    function getBrowerInfo() {
        let browser = (function (window) {
            let document = window.document;
            let navigator = window.navigator;
            let agent = navigator.userAgent.toLowerCase();
            // IE8+支持.返回浏览器渲染当前文档所用的模式
            // IE6,IE7:undefined.IE8:8(兼容模式返回7).IE9:9(兼容模式返回7||8)
            // IE10:10(兼容模式7||8||9)
            let IEMode = document.documentMode;
            let chrome = window.chrome || false;
            let system = {
                // user-agent
                agent: agent,
                // 是否为IE
                isIE: /trident/.test(agent),
                // Gecko内核
                isGecko: agent.indexOf('gecko') > 0 && agent.indexOf('like gecko') < 0,
                // webkit内核
                isWebkit: agent.indexOf('webkit') > 0,
                // 是否为标准模式
                isStrict: document.compatMode === 'CSS1Compat',
                // 是否支持subtitle
                supportSubTitle: function () {
                    return 'track' in document.createElement('track');
                },
                // 是否支持scoped
                supportScope: function () {
                    return 'scoped' in document.createElement('style');
                },

                // 获取IE的版本号
                ieVersion: function () {
                    let rMsie = /(msie\s|trident.*rv:)([\w.]+)/;
                    let match = rMsie.exec(agent);
                    try {
                        return match[2];
                    } catch (e) {
                        return IEMode;
                    }
                },
                // Opera版本号
                operaVersion: function () {
                    try {
                        if (window.opera) {
                            return agent.match(/opera.([\d.]+)/)[1];
                        }
                        else if (agent.indexOf('opr') > 0) {
                            return agent.match(/opr\/([\d.]+)/)[1];
                        }
                    } catch (e) {
                        return 0;
                    }
                }
            };

            try {
                // 浏览器类型(IE、Opera、Chrome、Safari、Firefox)
                system.type = system.isIE ? 'IE' :
                    window.opera || (agent.indexOf('opr') > 0) ? 'Opera' :
                        (agent.indexOf('chrome') > 0) ? 'Chrome' :
                            //safari也提供了专门的判定方式
                            window.openDatabase ? 'Safari' :
                                (agent.indexOf('firefox') > 0) ? 'Firefox' :
                                    'unknow';

                // 版本号
                system.version = (system.type === 'IE') ? system.ieVersion() :
                    (system.type === 'Firefox') ? agent.match(/firefox\/([\d.]+)/)[1] :
                        (system.type === 'Chrome') ? agent.match(/chrome\/([\d.]+)/)[1] :
                            (system.type === 'Opera') ? system.operaVersion() :
                                (system.type === 'Safari') ? agent.match(/version\/([\d.]+)/)[1] :
                                    '0';

                // 浏览器外壳
                system.shell = function () {
                    if (agent.indexOf('edge') > 0) {
                        system.version = agent.match(/edge\/([\d.]+)/)[1] || system.version;
                        return 'Edge';
                    }
                    // 遨游浏览器
                    if (agent.indexOf('maxthon') > 0) {
                        system.version = agent.match(/maxthon\/([\d.]+)/)[1] || system.version;
                        return 'Maxthon';
                    }
                    // QQ浏览器
                    if (agent.indexOf('qqbrowser') > 0) {
                        system.version = agent.match(/qqbrowser\/([\d.]+)/)[1] || system.version;
                        return 'QQBrowser';
                    }
                    // 搜狗浏览器
                    if (agent.indexOf('se 2.x') > 0) {
                        return '搜狗浏览器';
                    }

                    // Chrome:也可以使用window.chrome && window.chrome.webstore判断
                    if (chrome && system.type !== 'Opera') {
                        let external = window.external;
                        let clientInfo = window.clientInformation;
                        // 客户端语言:zh-cn,zh.360下面会返回undefined
                        let clientLanguage = clientInfo.languages;

                        // 猎豹浏览器:或者agent.indexOf("lbbrowser")>0
                        if (external && 'LiebaoGetVersion' in external) {
                            return 'LBBrowser';
                        }
                        // 百度浏览器
                        if (agent.indexOf('bidubrowser') > 0) {
                            system.version = agent.match(/bidubrowser\/([\d.]+)/)[1] ||
                                agent.match(/chrome\/([\d.]+)/)[1];
                            return 'BaiDuBrowser';
                        }
                        // 360极速浏览器和360安全浏览器
                        if (system.supportSubTitle() && typeof clientLanguage === 'undefined') {
                            let storeKeyLen = Object.keys(chrome.webstore).length;
                            let v8Locale = 'v8Locale' in window;
                            return storeKeyLen > 1 ? '360极速浏览器' : '360安全浏览器';
                        }
                        return 'Chrome';
                    }
                    return system.type;
                };

                // 浏览器名称(如果是壳浏览器,则返回壳名称)
                system.name = system.shell();
                // 对版本号进行过滤过处理
                // System.version = System.versionFilter(System.version);

            } catch (e) {
                // console.log(e.message);
            }

            return system;

        })(window);

        if (browser.name == undefined || browser.name == '') {
            browser.name = 'Unknown';
            browser.version = 'Unknown';
        }
        else if (browser.version == undefined) {
            browser.version = 'Unknown';
        }
        return browser;
    }

    function fetchRetry(url, options = {}, times = 1, delay = 1000, checkStatus = true) {
        return new Promise((resolve, reject) => {
            // fetch 成功处理函数
            function success(res) {
                if (checkStatus && !res.ok) {
                    failure(res);
                }
                else {
                    resolve(res);
                }
            }

            // 单次失败处理函数
            function failure(error) {
                times--;

                if (times) {
                    setTimeout(fetchUrl, delay);
                }
                else {
                    reject(error);
                }
            }

            // 总体失败处理函数
            function finalHandler(error) {
                throw error;
            }

            function fetchUrl() {
                return fetch(url, options)
                    .then(success)
                    .catch(failure)
                    .catch(finalHandler);
            }

            fetchUrl();
        });
    }

    // 下载指定url的资源
    async function downloadUrl(url, name = (new Date()).valueOf() + '.mp4') {
        let browser = getBrowerInfo();

        // Greasemonkey 需要把 url 转为 blobUrl
        if (GM_info.scriptHandler == 'Greasemonkey') {
            let res = await fetchRetry(url);
            let blob = await res.blob();
            url = URL.createObjectURL(blob);
        }

        // Chrome 可以使用 Tampermonkey 的 GM_download 函数绕过 CSP(Content Security Policy) 的限制
        if (window.GM_download) {
            GM_download({url, name});
        }
        else {
            // firefox 需要禁用 CSP, about:config -> security.csp.enable => false
            let a = document.createElement('a');
            a.href = url;
            a.download = name;
            // a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            setTimeout(function () {
                URL.revokeObjectURL(url);
            }, 100);
        }
    }

    function humanSize(size) {
        let n = Math.log(size) / Math.log(1024) | 0;
        return (size / Math.pow(1024, n)).toFixed(0) + ' ' + (n ? 'KMGTPEZY'[--n] + 'B' : 'Bytes');
    }

    if (!player) return;

    // 获取视频信息
    const res = await fetchRetry(playlistBaseUrl + videoId, {
        headers: {
            'referer': 'refererBaseUrl + videoId',
            'authorization': 'oauth c3cef7c66a1843f8b3a9e6a1e3160e20' // in zplayer.min.js of zhihu
        }
    }, 3);
    const videoInfo = await res.json();

    // 获取不同分辨率视频的信息
    for (let [key, video] of Object.entries(videoInfo.playlist)) {
        video.name = key;

        if (!videos.find(v => v.width == video.width)) {
            videos.push(video);
        }
    }

    // 按分辨率大小排序
    videos = videos.sort(function (v1, v2) {
        return v1.width == v2.width ? 0 : (v1.width > v2.width ? 1 : -1);
    }).reverse();

    document.addEventListener('DOMNodeInserted', (evt) => {
        let domControlBar = evt.relatedNode.querySelector(':scope > div:last-child > div:first-child');
        if (!domControlBar || domControlBar.querySelector('.download')) return;

        let domFullScreenBtn = domControlBar.querySelector(':scope > div:nth-last-of-type(1)');
        let domResolutionBtn = domControlBar.querySelector(':scope > div:nth-last-of-type(3)');
        let domDownloadBtn, defaultResolution, buttons;
        if (!domFullScreenBtn || !domFullScreenBtn.querySelector('button')) return;

        // 克隆分辨率菜单或全屏按钮为下载按钮
        domDownloadBtn = (domResolutionBtn && (domResolutionBtn.className == domFullScreenBtn.className))
            ? domResolutionBtn.cloneNode(true)
            : domFullScreenBtn.cloneNode(true);

        defaultResolution = domDownloadBtn.querySelector('button').innerText;

        // 生成下载按钮图标
        domDownloadBtn.querySelector('button:first-child').outerHTML = domFullScreenBtn.cloneNode(true).querySelector('button').outerHTML;
        domDownloadBtn.querySelector('svg').innerHTML = svgDownload;
        domDownloadBtn.className = domDownloadBtn.className + ' download';

        buttons = domDownloadBtn.querySelectorAll('button');

        // button 元素添加对应的下载地址
        buttons.forEach(dom => {
            let video = videos.find(v => v.name == resolutionMap[dom.innerText || defaultResolution]);
            video = video || videos[0];
            dom.dataset.video = video.play_url;
            if (dom.innerText) {
                (dom.innerText = `${dom.innerText} (${humanSize(video.size)})`);
            }
            else if (buttons.length == 1) {
                dom.nextSibling.querySelector('div').innerText = humanSize(video.size);
            }
        });

        // 鼠标事件 - 显示菜单
        domDownloadBtn.addEventListener('pointerenter', () => {
            let domMenu = domDownloadBtn.querySelector('div:nth-of-type(1)');
            if (domMenu) {
                domMenu.style.cssText = menuStyle + 'opacity:1 !important; visibility:visible !important';
            }
        });

        // 鼠标事件 - 隐藏菜单
        domDownloadBtn.addEventListener('pointerleave', () => {
            let domMenu = domDownloadBtn.querySelector('div:nth-of-type(1)');
            if (domMenu) {
                domMenu.style.cssText = menuStyle;
            }
        });

        // 鼠标事件 - 选择菜单项
        domDownloadBtn.addEventListener('pointerup', event => {
            if (downloading) {
                alert('当前正在执行下载任务，请等待任务完成。');
                return;
            }

            let e = event.srcElement || event.target;

            while (e.tagName != 'BUTTON') {
                e = e.parentNode;
            }

            downloadUrl(e.dataset.video);
        });

        // 显示下载按钮
        domControlBar.appendChild(domDownloadBtn);

    });
})();


(function () {
    'use strict';
    var currentURL = window.location.href;
    // 根据网速自己设置时间间隔
	var interval = 3000;
	var sideInterval = 4000;
	var bbsInterval = 3000; // 在ADBlock之后运行
	var iteyeInterval = 100;
    var blog = /article/;
    var bbs = /topics/;
    var iteye = /iteye/;
    //若为CSDN论坛,则：
    if(bbs.test(currentURL)){
        setTimeout(function () {
            $(".js_show_topic").click();
            document.getElementsByClassName("pulllog-box")[0].remove(); // 底部广告
            $(".mediav_ad").remove();       // 帖子尾部广告
            $(".post_recommend").remove();  // 帖子内[CSDN推荐]
            $(".ad_item").remove(); // 右侧广告
        }, bbsInterval);
    }else if (blog.test(currentURL)){
        csdn.copyright.init("", "", ""); //去除剪贴板劫持
        localStorage.setItem("anonymousUserLimit", ""); // 免登陆
        if (document.getElementsByClassName("btn-readmore")[0]){
            document.getElementsByClassName("btn-readmore")[0].click();
        } //自动展开
        if (document.getElementsByClassName("hide-article-box")[0]){
            document.getElementsByClassName("hide-article-box")[0].remove();
            document.getElementById("content_views").setAttribute("style", "user-select: text;")
        } //移除专栏
        if (document.getElementsByClassName("comment-list-box")[0]){
            document.getElementsByClassName("comment-list-box")[0].removeAttribute("style");
        } //自动展开
        $("#content_views").unbind("click");//移除url拦截
        setTimeout(function () {
            if (document.getElementsByClassName("csdn-tracking-statistics mb8 box-shadow")[0]) {
                document.getElementsByClassName("csdn-tracking-statistics mb8 box-shadow")[0].remove(); //左上广告
            }
            document.getElementById("asideFooter").remove();
            if (document.getElementById("adContent")) {
                document.getElementById("adContent").remove();
            }
            if (document.getElementsByClassName("p4course_target")[0]) {
                document.getElementsByClassName("p4course_target")[0].remove(); //左上广告
            }
            document.getElementsByClassName("bdsharebuttonbox")[0].remove();
            document.getElementsByClassName("vip-caise")[0].remove();
            if (document.getElementsByClassName("fourth_column")[0]) {
                document.getElementsByClassName("fourth_column")[0].remove(); //左上广告
            }
        }, interval);
        setTimeout(function () {
            if ($("div[id^='dmp_ad']")[0]) {
                $("div[id^='dmp_ad']")[0].remove();
            }
            if (document.getElementsByClassName("fourth_column")[0]) {
                document.getElementsByClassName("fourth_column")[0].remove();
            }
        }, sideInterval);
        setTimeout(function () {
            if (document.getElementsByClassName("pulllog-box")[0]) {
                document.getElementsByClassName("pulllog-box")[0].remove(); // 底部广告
            }
            var recommendObj = document.getElementsByClassName("recommend-fixed-box")[0].getElementsByClassName("right-item");
            for (var h = (recommendObj.length - 1); h>=0; h--) {
                if (recommendObj[h].tagName == "DIV") {
                    recommendObj[h].remove();
                }
            }
            if (document.getElementsByClassName("p4course_target")[0]) {
                document.getElementsByClassName("p4course_target")[0].remove();
            }
        }, sideInterval);
        setTimeout(function () {
            var hot = document.getElementsByClassName("type_hot_word");
            var recommend = document.getElementsByClassName("recommend-ad-box");
            for (var i = (hot.length - 1); i >= 0; i--) {
                hot[i].remove();
            }
            for (var j = (recommend.length - 1); j >= 0; j--) {
                recommend[j].remove();
            }
            if (document.getElementsByClassName("fourth_column")[0]) {
                document.getElementsByClassName("fourth_column")[0].remove();
            }
        }, sideInterval);
        setTimeout(function () {
            for(var x=470; x<490; x++){
                var kp_box = document.getElementById("kp_box_"+x); //右侧广告
                if(kp_box) {
                    kp_box.remove();
                }
            }
        }, 5000);
    } else if (iteye.test(currentURL)) {
        setInterval(function(){
            document.getElementById('btn-readmore').click();
        }, iteyeInterval);
        setTimeout(function () {
            document.getElementsByClassName("blog-sidebar")[0].remove();
            document.getElementById('main').style.width = '1000px';
        }, sideInterval);
    }
})();
