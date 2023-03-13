import React, { useState, createContext, useContext } from "react";

// import { languageOptions, dictionaryList } from "../languages";

// interface dictionaryType {
//   en: { FirstName: string };
//   de: {};
//   fa: {};
// }
// interface languageOptionsType {
//   en: string;
//   de: string;
//   fa: string;
// }
// type langContextType = {
//   userLanguage: string;
//   dictionary: { FirstName: string };
//   userLanguageChange: (selected: string) => void;
// };
// // create the language context with default selected language
// export const LanguageContext = createContext<langContextType | null>(null);

// // it provides the language context to app
// export function LanguageProvider({
//   children,
// }: {
//   children: React.ReactElement;
// }) {
//   const defaultLanguage = window.localStorage.getItem("lang-theme");
//   const [userLanguage, setUserLanguage] = useState(defaultLanguage || "en");
//   const options: languageOptionsType = languageOptions;

//   const dictionary: dictionaryType = dictionaryList;
//   const provider = {
//     userLanguage,
//     dictionary: dictionary[userLanguage as keyof typeof languageOptions],
//     userLanguageChange: (selected: string) => {
//       const newLanguage = options[selected as keyof languageOptionsType]
//         ? selected
//         : "en";
//       setUserLanguage(newLanguage);
//       window.localStorage.setItem("lang-theme", newLanguage);
//     },
//   };
//   const dic = provider.dictionary;
//   console.log(typeof dic);

//   return (
//     <LanguageContext.Provider value={provider}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// // get text according to id & current language
// // export function Text({ tid }: { tid: string }) {
// //   const { dictionary } = useContext(LanguageContext) as langContextType;

// //   return dictionary[tid] || tid;
// // }
