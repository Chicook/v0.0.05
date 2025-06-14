/** @jsxImportSource @emotion/react */

import '$/styles/__reflex_global_styles.css'

import { Fragment, StrictMode } from "react"
import RadixThemesColorModeProvider from "$/components/reflex/radix_themes_color_mode_provider.js"
import { Theme as RadixThemesTheme } from "@radix-ui/themes"
import theme from "$/utils/theme.js"
import { MemoizedToastProvider } from "$/utils/components"
import { jsx } from "@emotion/react"


import { EventLoopProvider, StateProvider, defaultColorMode } from "$/utils/context.js";
import { ThemeProvider } from 'next-themes'
import * as radix_ui_themes from "@radix-ui/themes";
import * as emotion_react from "@emotion/react";
import * as React from "react";
import * as utils_context from "$/utils/context";
import * as utils_state from "$/utils/state";
import * as utils_components from "$/utils/components";
import * as next_link from "next/link";


function AppWrap({children}) {
  




  return (
    jsx(
StrictMode,
{},
jsx(
RadixThemesColorModeProvider,
{},
jsx(
RadixThemesTheme,
{accentColor:"violet",css:{...theme.styles.global[':root'], ...theme.styles.global.body},grayColor:"slate"},
jsx(
Fragment,
{},
jsx(MemoizedToastProvider,{},)
,jsx(
Fragment,
{},
children
,),),),),)
  )
}

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Make contexts and state objects available globally for dynamic eval'd components
    let windowImports = {
      "@radix-ui/themes": radix_ui_themes,
      "@emotion/react": emotion_react,
      "react": React,
      "$/utils/context": utils_context,
      "$/utils/state": utils_state,
      "$/utils/components": utils_components,
      "next/link": next_link,
    };
    window["__reflex"] = windowImports;
  }, []);
  return (
    jsx(ThemeProvider, {defaultTheme:defaultColorMode,attribute:"class"},
      jsx(StateProvider, {},
        jsx(EventLoopProvider, {}, 
          jsx(AppWrap, {},
            jsx(Component, pageProps)
          )
        )
      )
    )
  );
}

