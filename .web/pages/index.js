/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Tabs as RadixThemesTabs } from "@radix-ui/themes"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import NextHead from "next/head"
import { jsx } from "@emotion/react"



export function Dropdownmenu__item_dae734d98dc77c867b3b4599faea032d () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_ecad624a83ecc5177bccafbea2f26ea0 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.metaverso_crypto_3_d___metaverso_crypto_3_d____state.select_network", ({ ["network"] : "Binance Smart Chain" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Item,
{onClick:on_click_ecad624a83ecc5177bccafbea2f26ea0},
"Binance Smart Chain"
,)
  )
}

export function Dropdownmenu__item_37ba5000536699318e7d5893b95df8da () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_447bb4e82cb1926a67d0ed70436472be = useCallback(((...args) => (addEvents([(Event("reflex___state____state.metaverso_crypto_3_d___metaverso_crypto_3_d____state.select_network", ({ ["network"] : "Solana" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Item,
{onClick:on_click_447bb4e82cb1926a67d0ed70436472be},
"Solana"
,)
  )
}

export function Dropdownmenu__item_de6b302b3f1c19ec452a77ae1b027ec6 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_dbc56e49772170ff2adde4c5e0901692 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.metaverso_crypto_3_d___metaverso_crypto_3_d____state.select_network", ({ ["network"] : "Ethereum" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Item,
{onClick:on_click_dbc56e49772170ff2adde4c5e0901692},
"Ethereum"
,)
  )
}

export function Dropdownmenu__root_f52dc4acc3a89778e0b960c8c7011647 () {
  
  const reflex___state____state__metaverso_crypto_3_d___metaverso_crypto_3_d____state = useContext(StateContexts.reflex___state____state__metaverso_crypto_3_d___metaverso_crypto_3_d____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_open_change_de957873a4c04b7beb60a4100a3782d3 = useCallback(((_ev_0) => (addEvents([(Event("reflex___state____state.metaverso_crypto_3_d___metaverso_crypto_3_d____state.set_show_networks_menu", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Root,
{css:({ ["isOpen"] : reflex___state____state__metaverso_crypto_3_d___metaverso_crypto_3_d____state.show_networks_menu }),onOpenChange:on_open_change_de957873a4c04b7beb60a4100a3782d3},
jsx(Dropdownmenu__trigger_e8c7a03e03361f54a8d00743b8c293c5,{},)
,jsx(
RadixThemesDropdownMenu.Content,
{},
jsx(Dropdownmenu__item_de6b302b3f1c19ec452a77ae1b027ec6,{},)
,jsx(Dropdownmenu__item_c62a309dd480b72b95a1f7863802867e,{},)
,jsx(Dropdownmenu__item_dae734d98dc77c867b3b4599faea032d,{},)
,jsx(Dropdownmenu__item_37ba5000536699318e7d5893b95df8da,{},)
,),)
  )
}

export function Dropdownmenu__item_c62a309dd480b72b95a1f7863802867e () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_989b034b7fa075acfb35222c5763d811 = useCallback(((...args) => (addEvents([(Event("reflex___state____state.metaverso_crypto_3_d___metaverso_crypto_3_d____state.select_network", ({ ["network"] : "Polygon" }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Item,
{onClick:on_click_989b034b7fa075acfb35222c5763d811},
"Polygon"
,)
  )
}

export function Dropdownmenu__trigger_e8c7a03e03361f54a8d00743b8c293c5 () {
  
  const reflex___state____state__metaverso_crypto_3_d___metaverso_crypto_3_d____state = useContext(StateContexts.reflex___state____state__metaverso_crypto_3_d___metaverso_crypto_3_d____state)





  
  return (
    jsx(
RadixThemesDropdownMenu.Trigger,
{},
jsx(
RadixThemesButton,
{css:({ ["background"] : ((reflex___state____state__metaverso_crypto_3_d___metaverso_crypto_3_d____state.selected_network === "Redes Blockchain") ? "#6c757d" : "#28a745"), ["color"] : "white", ["borderRadius"] : "md", ["&:hover"] : ({ ["background"] : ((reflex___state____state__metaverso_crypto_3_d___metaverso_crypto_3_d____state.selected_network === "Redes Blockchain") ? "#5a6268" : "#218838") }) }),size:({ ["initial"] : "1", ["md"] : "2" })},
reflex___state____state__metaverso_crypto_3_d___metaverso_crypto_3_d____state.selected_network
,),)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["background"] : "linear-gradient(to right, #a8c0ff, #3f2b96)", ["height"] : "calc(100vh - 1px)", ["width"] : "100vw", ["display"] : "flex", ["flexDirection"] : "column", ["alignItems"] : "center", ["justifyContent"] : "flex-start", ["border"] : "4px solid #3498db", ["boxSizing"] : "border-box", ["paddingTop"] : "0px", ["paddingBottom"] : "0px", ["overflowY"] : "hidden" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["paddingTop"] : "0px", ["paddingBottom"] : "0px", ["paddingInlineStart"] : "0px", ["paddingInlineEnd"] : "0px", ["width"] : "100%", ["background"] : "white", ["borderBottom"] : "0px solid #3498db", ["alignItems"] : "center", ["zIndex"] : "10", ["flexWrap"] : "wrap" }),direction:"row",gap:"3"},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "#34495e", ["fontFamily"] : "Helvetica, Arial, sans-serif", ["--default-font-family"] : "Helvetica, Arial, sans-serif", ["@media screen and (min-width: 0px)"] : ({ ["paddingLeft"] : "10px" }), ["@media screen and (min-width: 62em)"] : ({ ["paddingLeft"] : "20px" }) }),size:({ ["initial"] : "6", ["md"] : "7" })},
"World Virtual"
,),jsx(
RadixThemesTabs.Root,
{css:({ ["&[data-orientation='vertical']"] : ({ ["display"] : "flex" }), ["colorScheme"] : "blue", ["minHeight"] : "auto" })},
jsx(
RadixThemesTabs.List,
{css:({ ["&[data-orientation='vertical']"] : ({ ["display"] : "block", ["boxShadow"] : "inset -1px 0 0 0 var(--gray-a5)" }), ["flexWrap"] : "wrap" })},
jsx(
RadixThemesTabs.Trigger,
{css:({ ["&[data-orientation='vertical']"] : ({ ["width"] : "100%" }), ["fontFamily"] : "Helvetica, Arial, sans-serif", ["--default-font-family"] : "Helvetica, Arial, sans-serif", ["@media screen and (min-width: 0px)"] : ({ ["size"] : "1" }), ["@media screen and (min-width: 62em)"] : ({ ["size"] : "2" }) }),value:"acerca"},
"Acerca de"
,),jsx(
RadixThemesTabs.Trigger,
{css:({ ["&[data-orientation='vertical']"] : ({ ["width"] : "100%" }), ["fontFamily"] : "Helvetica, Arial, sans-serif", ["--default-font-family"] : "Helvetica, Arial, sans-serif", ["@media screen and (min-width: 0px)"] : ({ ["size"] : "1" }), ["@media screen and (min-width: 62em)"] : ({ ["size"] : "2" }) }),value:"caracteristicas"},
"Caracter\u00edsticas"
,),jsx(
RadixThemesTabs.Trigger,
{css:({ ["&[data-orientation='vertical']"] : ({ ["width"] : "100%" }), ["fontFamily"] : "Helvetica, Arial, sans-serif", ["--default-font-family"] : "Helvetica, Arial, sans-serif", ["@media screen and (min-width: 0px)"] : ({ ["size"] : "1" }), ["@media screen and (min-width: 62em)"] : ({ ["size"] : "2" }) }),value:"comunidad"},
"Comunidad"
,),),),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},)
,jsx(Dropdownmenu__root_f52dc4acc3a89778e0b960c8c7011647,{},)
,),jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["flexGrow"] : "1", ["width"] : "100%", ["height"] : "100%", ["paddingTop"] : "0px", ["paddingBottom"] : "0px", ["boxSizing"] : "border-box" })},
jsx(RadixThemesBox,{css:({ ["background"] : "white", ["border"] : "2px solid #3498db", ["borderRadius"] : "15px", ["padding"] : "0px", ["width"] : "100%", ["boxShadow"] : "lg", ["height"] : "100%", ["boxSizing"] : "border-box" })},)
,),),jsx(
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
