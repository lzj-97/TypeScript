enum Type { Strong, Weak }

class Java {
  helloJava() {
    console.log('helloJava');
  }
  java: any
}

class JavaScript {
  helloJavaScript() {
    console.log('helloJavaScript');
  }
  javascript: any
}

// 类型保护函数                            类型谓词
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()

  if(isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }

  // 类型保护
  // instanceof
  // if(lang instanceof Java) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // in
  if('java' in lang) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }

  // typeof
  if(typeof x === 'string') {
    x.length
  } else {
    x.toFixed()
  }
  return lang
}