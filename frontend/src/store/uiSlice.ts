import { createSlice } from "@reduxjs/toolkit";

export interface uiStateType {
    isDark : boolean,
    isRtl : boolean
}

const uiInitialState = {
    isDark : true,
    isRtl : false
}

    const uiSlice = createSlice({
        name : 'uiSlice',
        initialState : uiInitialState,
        reducers:{
            setMode(state){
                state.isDark = !state.isDark
            },
            switchTheme(state){
                
                if (localStorage.getItem("color-theme")) {
                    // If light, make dark and save in localstorage
                    if (localStorage.getItem("color-theme") === "light") {
                      document.documentElement.classList.add("dark");
                      document.documentElement.classList.remove("light");
                      localStorage.setItem("color-theme", "dark");
                     state.isDark = true
                    } else {
                        document.documentElement.classList.remove("dark");
                        document.documentElement.classList.add("light");
                        localStorage.setItem("color-theme", "light");
                        state.isDark = false
                    }
                } else {
                    // If not in localstorage
                    if (document.documentElement.classList.contains("dark")) {
                        document.documentElement.classList.remove("dark");
                        document.documentElement.classList.add("light");
                        localStorage.setItem("color-theme", "light");
                        state.isDark = false
                    } else {
                        document.documentElement.classList.add("dark");
                        localStorage.setItem("color-theme", "dark");
                        state.isDark = true
                    }
                  }
            },
            switchDir(state){
                if (localStorage.getItem("lang-theme")) {
                    console.log(localStorage.getItem("lang-theme"))
                    // If en, make fa and save in localstorage
                    if (localStorage.getItem("lang-theme") === "en" || localStorage.getItem("lang-theme") === "de") {
                        document.documentElement.removeAttribute("dir");
                        document.documentElement.setAttribute("dir", "ltr");
                        state.isRtl = false
                        
                    } else {
                        console.log("hi")
                      document.documentElement.removeAttribute("dir");
                      document.documentElement.setAttribute("dir", "rtl");
                      state.isRtl = true
                    }
                  } else {
                    // If not in localstorage
                    if (document.documentElement.getAttribute("dir")) {
                      const dir = document.documentElement.getAttribute("dir");
                      if (dir === "rtl") {
                        document.documentElement.removeAttribute("dir");
                        document.documentElement.setAttribute("dir", "rtl");
                        
                        state.isRtl = true
                      } else {
                        document.documentElement.removeAttribute("dir");
                        document.documentElement.setAttribute("dir", "ltr");
                        state.isRtl = false
                      }
                    } else {
                      document.documentElement.setAttribute("dir", "ltr");
                      window.localStorage.setItem("lang-theme", "en");
                      state.isRtl = false
                    }
                  }
            },
            selectLang(state , actions){
                const lang = actions.payload
                if (lang === "fa") {
                    window.localStorage.setItem("lang-theme", "fa");
                    document.documentElement.setAttribute("dir", "rtl");
                    state.isRtl = true
                  }
                  if (lang === "en") {
                    window.localStorage.setItem("lang-theme", "en");
                    document.documentElement.setAttribute("dir", "ltr");
                    state.isRtl = false
                  }
                  if (lang === "de") {
                    window.localStorage.setItem("lang-theme", "de");
                    document.documentElement.setAttribute("dir", "ltr");
                    state.isRtl = false
                  }
            }
        }
    })
    export const uiActions = uiSlice.actions;
    export default uiSlice;