/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Text as RadixThemesText } from "@radix-ui/themes"
import NextHead from "next/head"
import { jsx } from "@emotion/react"



export default function Component() {
    




  return (
    jsx(
Fragment,
{},
jsx(
RadixThemesBox,
{css:({ ["width"] : "100%", ["height"] : "100vh", ["display"] : "flex", ["flexDirection"] : "column", ["border"] : "0px", ["boxShadow"] : "none", ["padding"] : "0px", ["background"] : "linear-gradient(to right, #a8c0ff, #3f2b96)", ["boxSizing"] : "border-box" })},
jsx(
RadixThemesFlex,
{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["height"] : "33px", ["backgroundColor"] : "#FFD700", ["alignItems"] : "center", ["paddingLeft"] : "12px", ["paddingRight"] : "12px", ["zIndex"] : "10", ["flexShrink"] : "0", ["boxSizing"] : "border-box" }),direction:"row",gap:"3"},
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
,),jsx(
RadixThemesButton,
{css:({ ["background"] : "#343a40", ["color"] : "white", ["marginLeft"] : "1.2em", ["fontSize"] : "0.85em", ["padding"] : "0.4em 0.9em" })},
"Redes Blockchain"
,),),jsx(
RadixThemesBox,
{css:({ ["width"] : "100%", ["flexGrow"] : "1", ["backgroundColor"] : "#228B22", ["padding"] : "2px", ["boxSizing"] : "border-box", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},
jsx(
RadixThemesBox,
{css:({ ["backgroundColor"] : "white", ["border"] : "2px solid blue", ["borderRadius"] : "15px", ["boxShadow"] : "lg", ["width"] : "90%", ["height"] : "100%", ["padding"] : "0", ["margin"] : "0", ["boxSizing"] : "border-box", ["overflow"] : "hidden" })},
jsx(
RadixThemesText,
{as:"p",css:({ ["color"] : "black", ["padding"] : "20px" })},
"AQU\u00cd tiene que ir la zona blanca., del tama\u00f1o del marco blanco"
,),),),),jsx(
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
