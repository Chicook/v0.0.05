/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Text as RadixThemesText } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event, isTrue } from "$/utils/state"
import NextHead from "next/head"
import { jsx } from "@emotion/react"



export function Button_e1cf53e1c4947790e64fed1e69facab5 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_1945f731915504a544948d7373abdaff = useCallback(((...args) => (addEvents([(Event("reflex___state____state.wold_virtual__crypto_3_d____wold_virtual__crypto_3_d____state.select_network", ({ ["network"] : "Solana" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["fontSize"] : "0.7em", ["padding"] : "0.3em" }),onClick:on_click_1945f731915504a544948d7373abdaff},
"Solana"
,)
  )
}

export function Button_20b47b495e2be473f225366ecb461e9f () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_b0ae231e11ada72431e18db8b956b307 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.wold_virtual__crypto_3_d____wold_virtual__crypto_3_d____state.select_network", ({ ["network"] : "Ethereum" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["fontSize"] : "0.7em", ["padding"] : "0.3em" }),onClick:on_click_b0ae231e11ada72431e18db8b956b307},
"Ethereum"
,)
  )
}

export function Button_de0a5e42e819885256c25405dc6b025c () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_87b6a14f951f570582f31591b6dac5cd = useCallback(((...args) => (addEvents([(Event("reflex___state____state.wold_virtual__crypto_3_d____wold_virtual__crypto_3_d____state.select_network", ({ ["network"] : "Binance Smart Chain" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["fontSize"] : "0.7em", ["padding"] : "0.3em" }),onClick:on_click_87b6a14f951f570582f31591b6dac5cd},
"Binance Smart Chain"
,)
  )
}

export function Button_bdea2adb1c3cb190bc9aa3885e1309be () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__wold_virtual__crypto_3_d____wold_virtual__crypto_3_d____state = useContext(StateContexts.reflex___state____state__wold_virtual__crypto_3_d____wold_virtual__crypto_3_d____state)


  const on_click_0b62d68901eb13b324e8b4eed6039390 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.wold_virtual__crypto_3_d____wold_virtual__crypto_3_d____state.toggle_networks_menu", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["background"] : "#343a40", ["color"] : "white", ["marginLeft"] : "0.5em", ["fontSize"] : "0.65em", ["padding"] : "0.3em 0.6em", ["cursor"] : "pointer", ["borderRadius"] : "4px" }),onClick:on_click_0b62d68901eb13b324e8b4eed6039390},
reflex___state____state__wold_virtual__crypto_3_d____wold_virtual__crypto_3_d____state.selected_network
,)
  )
}

export function Button_6c889623a9ccb3219a55f50ba2602202 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_e7c89ee54c41bed8e1435741aa41569a = useCallback(((...args) => (addEvents([(Event("reflex___state____state.wold_virtual__crypto_3_d____wold_virtual__crypto_3_d____state.select_network", ({ ["network"] : "Polygon" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["fontSize"] : "0.7em", ["padding"] : "0.3em" }),onClick:on_click_e7c89ee54c41bed8e1435741aa41569a},
"Polygon"
,)
  )
}

export function Button_5b37f6ca731052029592de8c19d95b72 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_ab00aac4316c6e7e194b3b81fd3164cd = useCallback(((...args) => (addEvents([(Event("reflex___state____state.wold_virtual__crypto_3_d____wold_virtual__crypto_3_d____state.select_network", ({ ["network"] : "Arbitrum" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["fontSize"] : "0.7em", ["padding"] : "0.3em" }),onClick:on_click_ab00aac4316c6e7e194b3b81fd3164cd},
"Arbitrum"
,)
  )
}

export function Button_d4a80e94114e32e91cfa2025147abdd6 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_398bc081f24190707ba984ada59974bf = useCallback(((...args) => (addEvents([(Event("reflex___state____state.wold_virtual__crypto_3_d____wold_virtual__crypto_3_d____state.select_network", ({ ["network"] : "Avalanche" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["width"] : "100%", ["fontSize"] : "0.7em", ["padding"] : "0.3em" }),onClick:on_click_398bc081f24190707ba984ada59974bf},
"Avalanche"
,)
  )
}

export function Fragment_278699aebe0229b67f94e686e5bbfb7c () {
  
  const reflex___state____state__wold_virtual__crypto_3_d____wold_virtual__crypto_3_d____state = useContext(StateContexts.reflex___state____state__wold_virtual__crypto_3_d____wold_virtual__crypto_3_d____state)





  
  return (
    jsx(
Fragment,
{},
(reflex___state____state__wold_virtual__crypto_3_d____wold_virtual__crypto_3_d____state.show_networks_menu ? (jsx(
Fragment,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["position"] : "absolute", ["top"] : "100%", ["right"] : "0", ["backgroundColor"] : "white", ["border"] : "1px solid #ddd", ["borderRadius"] : "4px", ["boxShadow"] : "0 2px 8px rgba(0,0,0,0.1)", ["zIndex"] : "1000", ["width"] : "160px", ["alignItems"] : "stretch" }),direction:"column",gap:"1"},
jsx(Button_de0a5e42e819885256c25405dc6b025c,{},)
,jsx(Button_20b47b495e2be473f225366ecb461e9f,{},)
,jsx(Button_6c889623a9ccb3219a55f50ba2602202,{},)
,jsx(Button_d4a80e94114e32e91cfa2025147abdd6,{},)
,jsx(Button_5b37f6ca731052029592de8c19d95b72,{},)
,jsx(Button_e1cf53e1c4947790e64fed1e69facab5,{},)
,),)) : (jsx(
Fragment,
{},
null
,))),)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["width"] : "100vw", ["height"] : "100vh", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", ["margin"] : "0", ["padding"] : "0" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "90vw", ["height"] : "90vh", ["border"] : "2px solid #4A90E2", ["borderRadius"] : "15px", ["overflow"] : "hidden" }),direction:"column",gap:"1"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "50px", ["backgroundColor"] : "#FFD700", ["alignItems"] : "center", ["paddingInlineStart"] : "4", ["paddingInlineEnd"] : "4", ["zIndex"] : "100", ["position"] : "relative" }),direction:"row",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "1.2em", ["color"] : "black", ["fontWeight"] : "bold" })},
"World Virtual"
,),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["marginLeft"] : "0.5em", ["color"] : "black", ["fontSize"] : "0.8em" })},
"Mapa del proyecto."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["marginLeft"] : "0.5em", ["color"] : "black", ["fontSize"] : "0.8em" })},
"Libro blanco"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["marginLeft"] : "0.5em", ["color"] : "black", ["fontSize"] : "0.8em" })},
"C\u00f3digo abierto"
,),jsx(Button_bdea2adb1c3cb190bc9aa3885e1309be,{},)
,jsx(Fragment_278699aebe0229b67f94e686e5bbfb7c,{},)
,),jsx(
RadixThemesBox,
{css:({ ["width"] : "100%", ["height"] : "100%", ["backgroundColor"] : "#228B22", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["padding"] : "2" })},
jsx(
RadixThemesBox,
{css:({ ["backgroundColor"] : "white", ["border"] : "2px solid #4A90E2", ["borderRadius"] : "30px", ["boxShadow"] : "0 4px 20px rgba(0,0,0,0.1)", ["width"] : "90%", ["height"] : "85%", ["padding"] : "2rem", ["margin"] : "auto", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["justifyContent"] : "center", ["height"] : "100%" }),direction:"column",gap:"2"},
jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "1.5em", ["fontWeight"] : "bold", ["color"] : "#333" })},
"\u00c1rea de Contenido Principal"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "1em", ["color"] : "#666", ["textAlign"] : "center" })},
"Aqu\u00ed va el contenido principal de la aplicaci\u00f3n."
,),jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "0.9em", ["color"] : "#888", ["textAlign"] : "center" })},
"El \u00e1rea se ajusta autom\u00e1ticamente al tama\u00f1o de la ventana."
,),),),),),),jsx(
NextHead,
{},
jsx(
"title",
{},
"WoldvirtualCrypto3D | Index"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,),)
  )
}
