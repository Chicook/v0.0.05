/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Text as RadixThemesText } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event, isTrue } from "$/utils/state"
import NextHead from "next/head"
import { jsx } from "@emotion/react"



export function Fragment_fcc0f6f7f577c2432793a35778a9b148 () {
  
  const reflex___state____state__metaverso_crypto_3_d___metaverso_crypto_3_d____state = useContext(StateContexts.reflex___state____state__metaverso_crypto_3_d___metaverso_crypto_3_d____state)





  
  return (
    jsx(
Fragment,
{},
(reflex___state____state__metaverso_crypto_3_d___metaverso_crypto_3_d____state.show_networks_menu ? (jsx(
Fragment,
{},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["position"] : "absolute", ["top"] : "40px", ["right"] : "12px", ["backgroundColor"] : "white", ["border"] : "1px solid #ddd", ["borderRadius"] : "5px", ["zIndex"] : "100", ["width"] : "150px", ["alignItems"] : "stretch" }),direction:"column",gap:"3"},
jsx(Button_dd6fd48cf9544ade41bd544f5a4c0b93,{},)
,jsx(Button_1a9adbd968d6286c04be762cc974d643,{},)
,jsx(Button_753b97fabc03257f2ecbcdbae562e218,{},)
,),)) : (jsx(Fragment,{},)
)),)
  )
}

export function Button_a75726215240045113e1050d71cae7d2 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const reflex___state____state__metaverso_crypto_3_d___metaverso_crypto_3_d____state = useContext(StateContexts.reflex___state____state__metaverso_crypto_3_d___metaverso_crypto_3_d____state)


  const on_click_22343bb10d8cc595ba63dd56b7b4fc1d = useCallback(((...args) => (addEvents([(Event("reflex___state____state.metaverso_crypto_3_d___metaverso_crypto_3_d____state.toggle_networks_menu", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["background"] : "#343a40", ["color"] : "white", ["marginLeft"] : "1.2em", ["fontSize"] : "0.85em", ["padding"] : "0.4em 0.9em", ["cursor"] : "pointer" }),onClick:on_click_22343bb10d8cc595ba63dd56b7b4fc1d},
reflex___state____state__metaverso_crypto_3_d___metaverso_crypto_3_d____state.selected_network
,)
  )
}

export function Button_dd6fd48cf9544ade41bd544f5a4c0b93 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_028d035645b35eb7d52b5813833e8d28 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.metaverso_crypto_3_d___metaverso_crypto_3_d____state.select_network", ({ ["network"] : "Red A" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["width"] : "100%" }),onClick:on_click_028d035645b35eb7d52b5813833e8d28},
"Red A"
,)
  )
}

export function Button_753b97fabc03257f2ecbcdbae562e218 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_5c1e8324a052834f38dd83994a60c872 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.metaverso_crypto_3_d___metaverso_crypto_3_d____state.select_network", ({ ["network"] : "Red C" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["width"] : "100%" }),onClick:on_click_5c1e8324a052834f38dd83994a60c872},
"Red C"
,)
  )
}

export function Button_1a9adbd968d6286c04be762cc974d643 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_ebe3c0871dd65cbb580ee98d0fb3b8ad = useCallback(((...args) => (addEvents([(Event("reflex___state____state.metaverso_crypto_3_d___metaverso_crypto_3_d____state.select_network", ({ ["network"] : "Red B" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["width"] : "100%" }),onClick:on_click_ebe3c0871dd65cbb580ee98d0fb3b8ad},
"Red B"
,)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["width"] : "100vw", ["height"] : "100vh", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "linear-gradient(to right, #a8c0ff, #3f2b96)", ["boxSizing"] : "border-box", ["padding"] : "2cm" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "calc(100% - (2 * 2cm))", ["height"] : "calc(100% - (2 * 2cm))", ["border"] : "2px solid blue", ["borderRadius"] : "15px", ["boxSizing"] : "border-box", ["overflow"] : "hidden" }),direction:"column",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "33px", ["backgroundColor"] : "#FFD700", ["alignItems"] : "center", ["paddingLeft"] : "12px", ["paddingRight"] : "12px", ["zIndex"] : "10", ["flexShrink"] : "0", ["boxSizing"] : "border-box", ["position"] : "relative" }),direction:"row",gap:"3"},
jsx(
RadixThemesText,
{as:"p",css:({ ["fontSize"] : "1.3em", ["color"] : "black" })},
"World Virtual"
,),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["marginLeft"] : "0.7em", ["color"] : "black", ["fontSize"] : "0.85em" })},
"Acerca de"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["marginLeft"] : "0.7em", ["color"] : "black", ["fontSize"] : "0.85em" })},
"Caracter\u00edsticas"
,),jsx(
RadixThemesText,
{as:"p",css:({ ["marginLeft"] : "0.7em", ["color"] : "black", ["fontSize"] : "0.85em" })},
"Comunidad"
,),jsx(Button_a75726215240045113e1050d71cae7d2,{},)
,jsx(Fragment_fcc0f6f7f577c2432793a35778a9b148,{},)
,),jsx(
RadixThemesBox,
{css:({ ["width"] : "100%", ["flexGrow"] : "1", ["backgroundColor"] : "#228B22", ["padding"] : "2px", ["boxSizing"] : "border-box", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["overflow"] : "hidden" })},
jsx(
RadixThemesBox,
{css:({ ["backgroundColor"] : "white", ["border"] : "2px solid blue", ["borderRadius"] : "15px", ["boxShadow"] : "lg", ["width"] : "90%", ["height"] : "90%", ["padding"] : "0", ["margin"] : "auto", ["boxSizing"] : "border-box", ["overflow"] : "hidden" })},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "black", ["padding"] : "20px" })},
"AQU\u00cd tiene que ir la zona blanca., del tama\u00f1o del marco blanco"
,),),),),),jsx(
NextHead,
{},
jsx(
"title",
{},
"MetaversoCrypto3D | Index"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,),)
  )
}
