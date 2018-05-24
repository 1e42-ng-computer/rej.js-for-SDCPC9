# rej.js-for-SDCPC9

rej.js, rejudge for problem F in SDCPC9

------

It is an **unofficial** ranklist generator.

Uses rejudged data from [https://www.zhihu.com/question/272062934/answer/365222687](https://www.zhihu.com/question/272062934/answer/365222687).

## Usage

1. Open SDCPC9 ranklist page [http://acm.sdufe.edu.cn/html/](http://acm.sdufe.edu.cn/html/) by using Chrome/Firefox/Safari or high-speed mode in some multi-engine browsers
2. Open developer tools (press `F12` if you are using Chrome, and other browsers may be different, please search for this)
3. Switch to console tab
4. Copy and paste the command below and press enter

```js
(function(){var r=document.createElement('script');r.setAttribute('src','https://cdn.rawgit.com/1e42-ng-computer/rej.js-for-SDCPC9/master/rej.js');document.body.appendChild(r);r.addEventListener('load',function(){rejudge();});})()
```
