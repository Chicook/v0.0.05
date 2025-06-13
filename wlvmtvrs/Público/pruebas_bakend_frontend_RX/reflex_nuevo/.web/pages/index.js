/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Button as RadixThemesButton, Container as RadixThemesContainer, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText } from "@radix-ui/themes"
import { Gamepad as LucideGamepad, Globe as LucideGlobe, Rocket as LucideRocket } from "lucide-react"
import { EventLoopContext, StateContexts } from "$/utils/context"
import { Event } from "$/utils/state"
import NextHead from "next/head"
import { jsx } from "@emotion/react"



export function Button_4d0da0f0f960c612868c21cac30caede () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_click_bda1eeb3300b2e3106238aac815b428b = useCallback(((...args) => (addEvents([(Event("reflex___state____state.reflex_nuevo___reflex_nuevo____state.toggle_networks_menu", ({  }), ({  })))], args, ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesButton,
{css:({ ["background"] : "#007bff", ["color"] : "white", ["borderRadius"] : "md", ["&:hover"] : ({ ["background"] : "#0056b3" }) }),onClick:on_click_bda1eeb3300b2e3106238aac815b428b,size:"3"},
"Conectar"
,)
  )
}

export function Dropdownmenu__root_7ce86de9d3d2040976c4189ecd3d68fb () {
  
  const reflex___state____state__reflex_nuevo___reflex_nuevo____state = useContext(StateContexts.reflex___state____state__reflex_nuevo___reflex_nuevo____state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_open_change_7346b81fdce06629b02873e9ef67caca = useCallback(((_ev_0) => (addEvents([(Event("reflex___state____state.reflex_nuevo___reflex_nuevo____state.set_show_networks_menu", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, Event])



  
  return (
    jsx(
RadixThemesDropdownMenu.Root,
{css:({ ["isOpen"] : reflex___state____state__reflex_nuevo___reflex_nuevo____state.show_networks_menu }),onOpenChange:on_open_change_7346b81fdce06629b02873e9ef67caca},
jsx(
RadixThemesDropdownMenu.Trigger,
{},
jsx(
RadixThemesButton,
{css:({ ["background"] : "#6c757d", ["color"] : "white", ["borderRadius"] : "md", ["&:hover"] : ({ ["background"] : "#5a6268" }) }),size:"3"},
"Redes Blockchain"
,),),jsx(
RadixThemesDropdownMenu.Content,
{},
jsx(
RadixThemesDropdownMenu.Item,
{},
"Ethereum"
,),jsx(
RadixThemesDropdownMenu.Item,
{},
"Polygon"
,),jsx(
RadixThemesDropdownMenu.Item,
{},
"Binance Smart Chain"
,),jsx(
RadixThemesDropdownMenu.Item,
{},
"Solana"
,),),)
  )
}

export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesContainer,
{css:({ ["padding"] : "16px", ["background"] : "linear-gradient(to right, #a8c0ff, #3f2b96)", ["height"] : "100vh", ["width"] : "100vw", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }),size:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["minHeight"] : "85vh", ["background"] : "white", ["border"] : "2px solid #3498db", ["borderRadius"] : "15px", ["padding"] : "30px", ["width"] : "80%", ["maxWidth"] : "900px", ["boxShadow"] : "lg" }),direction:"column",justify:"start",gap:"5"},
jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })},
jsx(
RadixThemesHeading,
{css:({ ["color"] : "#34495e", ["fontFamily"] : "Helvetica, Arial, sans-serif", ["--default-font-family"] : "Helvetica, Arial, sans-serif" }),size:"9"},
"World Virtual"
,),),jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "#2c3e50", ["fontFamily"] : "Helvetica, Arial, sans-serif", ["--default-font-family"] : "Helvetica, Arial, sans-serif" }),size:"5"},
"Un metaverso descentralizado 3D donde t\u00fa eres el principal protagonista"
,),),jsx(
RadixThemesFlex,
{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "flex-start" }),direction:"column",gap:"3"},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(LucideGlobe,{css:({ ["color"] : "#28a745" })},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "#2c3e50" })},
"Explora mundos infinitos"
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(LucideGamepad,{css:({ ["color"] : "#17a2b8" })},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "#2c3e50" })},
"Crea tu propia realidad"
,),),jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",direction:"row",gap:"3"},
jsx(LucideRocket,{css:({ ["color"] : "#fd7e14" })},)
,jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "#2c3e50" })},
"Conecta con otros usuarios"
,),),),),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},)
,jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingRight"] : "20px" }),direction:"row",justify:"end",gap:"3"},
jsx(Button_4d0da0f0f960c612868c21cac30caede,{},)
,jsx(Dropdownmenu__root_7ce86de9d3d2040976c4189ecd3d68fb,{},)
,),),),jsx(
NextHead,
{},
jsx(
"title",
{},
"ReflexNuevo | Index"
,),jsx("meta",{content:"favicon.ico",property:"og:image"},)
,),)
  )
}
