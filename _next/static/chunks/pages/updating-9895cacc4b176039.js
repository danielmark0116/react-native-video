(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[884],{5236:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/updating",function(){return t(2151)}])},2151:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return l}});var i=t(5893),s=t(2673),o=t(3393),a=t(2702);t(9128);var r=t(2643);let l=[{depth:3,value:"Version 6.0.0",id:"version-600"},{depth:4,value:"iOS",id:"ios"},{depth:5,value:"linking",id:"linking"},{depth:5,value:"podspec",id:"podspec"},{depth:4,value:"Android",id:"android"},{depth:5,value:"Using app build settings",id:"using-app-build-settings"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",h3:"h3",h4:"h4",h5:"h5",p:"p",code:"code",a:"a",pre:"pre",span:"span",strong:"strong"},(0,r.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Updating"}),"\n",(0,i.jsx)(n.h3,{id:"version-600",children:"Version 6.0.0"}),"\n",(0,i.jsx)(n.h4,{id:"ios",children:"iOS"}),"\n",(0,i.jsx)(n.h5,{id:"linking",children:"linking"}),"\n",(0,i.jsx)(n.p,{children:"In your project Podfile add support for static dependency linking. This is required to support the new Promises subdependency in the iOS swift conversion."}),"\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"use_frameworks! :linkage => :static"})," just under ",(0,i.jsx)(n.code,{children:"platform :ios"})," in your ios project Podfile."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"examples/basic/ios/Podfile#L5",children:"See the example ios project for reference"})}),"\n",(0,i.jsx)(n.h5,{id:"podspec",children:"podspec"}),"\n",(0,i.jsx)(n.p,{children:"You can remove following lines from your podfile as they are not necessary anymore"}),"\n",(0,i.jsx)(n.pre,{"data-language":"diff","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"diff","data-theme":"default",children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"#EF6270"},children:"-  `pod 'react-native-video', :path => '../node_modules/react-native-video/react-native-video.podspec'`"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"#EF6270"},children:"-  `pod 'react-native-video/VideoCaching', :path => '../node_modules/react-native-video/react-native-video.podspec'`"})})]})}),"\n",(0,i.jsxs)(n.p,{children:["If you were previously using VideoCaching, you should $RNVideoUseVideoCaching flag in your podspec, see: ",(0,i.jsx)(n.a,{href:"https://react-native-video.github.io/react-native-video/installation#video-caching",children:"installation section"})]}),"\n",(0,i.jsx)(n.h4,{id:"android",children:"Android"}),"\n",(0,i.jsxs)(n.p,{children:["If you are already using Exoplayer on V5, you should remove the patch done from ",(0,i.jsx)(n.strong,{children:"android/settings.gradle"})]}),"\n",(0,i.jsx)(n.pre,{"data-language":"diff","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"diff","data-theme":"default",children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"#EF6270"},children:"- include ':react-native-video'"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"#EF6270"},children:"- project(':react-native-video').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-video/android-exoplayer')"})})]})}),"\n",(0,i.jsx)(n.h5,{id:"using-app-build-settings",children:"Using app build settings"}),"\n",(0,i.jsxs)(n.p,{children:["You will need to create a ",(0,i.jsx)(n.code,{children:"project.ext"})," section in the top-level build.gradle file (not app/build.gradle). Fill in the values from the example below using the values found in your app/build.gradle file."]}),"\n",(0,i.jsx)(n.pre,{"data-language":"groovy","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"groovy","data-theme":"default",children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// Top-level build file where you can add configuration options common to all sub-projects/modules."})}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"buildscript {"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:". "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// Various other settings go here"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"allprojects {"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:". "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// Various other settings go here"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    project"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"."}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"ext {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        compileSdkVersion "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"31"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        buildToolsVersion "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"30.0.2"'})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:" "}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        minSdkVersion "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"21"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        targetSdkVersion "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"22"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,i.jsxs)(n.p,{children:["If you encounter an error ",(0,i.jsx)(n.code,{children:"Could not find com.android.support:support-annotations:27.0.0."})," reinstall your Android Support Repository."]})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/updating.md",route:"/updating",timestamp:1711621372e3,pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",component:"API",other:"Other",separator_versions:{type:"separator",title:""},updating:"Updating",changelog:{title:"Changelog",newWindow:!0,href:"https://github.com/react-native-video/react-native-video/blob/master/CHANGELOG.md"},separator_community:{type:"separator",title:""},projects:"Useful projects"}},{kind:"Folder",name:"component",route:"/component",children:[{kind:"Meta",data:{props:"Properties",drm:"DRM",ads:"Ads",events:"Events",methods:"Methods"}},{kind:"MdxPage",name:"ads",route:"/component/ads"},{kind:"MdxPage",name:"drm",route:"/component/drm"},{kind:"MdxPage",name:"events",route:"/component/events"},{kind:"MdxPage",name:"methods",route:"/component/methods"},{kind:"MdxPage",name:"props",route:"/component/props"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"other",route:"/other",children:[{kind:"Meta",data:{caching:"Caching",misc:"Misc",debug:"Debugging","new-arch":"New Architecture"}},{kind:"MdxPage",name:"caching",route:"/other/caching"},{kind:"MdxPage",name:"debug",route:"/other/debug"},{kind:"MdxPage",name:"misc",route:"/other/misc"},{kind:"MdxPage",name:"new-arch",route:"/other/new-arch"}]},{kind:"MdxPage",name:"projects",route:"/projects"},{kind:"MdxPage",name:"updating",route:"/updating"}],flexsearch:{codeblocks:!0},title:"Updating",headings:l},pageNextRoute:"/updating",nextraLayout:o.ZP,themeConfig:a.Z};n.default=(0,s.j)(c)},2702:function(e,n,t){"use strict";var i=t(5893);t(7294),n.Z={head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"language",content:"en"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,i.jsx)("meta",{name:"description",content:"Video component for React Native"}),(0,i.jsx)("meta",{name:"og:title",content:"React Native Video"}),(0,i.jsx)("meta",{name:"og:description",content:"A Video component for React Native"}),(0,i.jsx)("meta",{name:"og:image",content:"https://react-native-video.github.io/react-native-video/thumbnail.jpg"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:"React Native Video"}),(0,i.jsx)("meta",{name:"twitter:description",content:"A Video component for React Native"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://react-native-video.github.io/react-native-video/thumbnail.jpg"}),(0,i.jsx)("meta",{name:"twitter:image:alt",content:"React Native Video"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap",rel:"stylesheet"})]}),logo:(0,i.jsxs)("span",{children:["\uD83C\uDFAC ",(0,i.jsx)("strong",{children:"Video component"})," for React Native"]}),faviconGlyph:"\uD83C\uDFAC",project:{link:"https://github.com/react-native-video/react-native-video"},docsRepositoryBase:"https://github.com/react-native-video/react-native-video/tree/master/docs/",footer:{text:(0,i.jsxs)("span",{children:["Built with love ❤️ by ",(0,i.jsx)("strong",{children:"React Native Community"})]})},useNextSeoProps:()=>({titleTemplate:"%s – Video"})}},5789:function(){}},function(e){e.O(0,[774,890,888,179],function(){return e(e.s=5236)}),_N_E=e.O()}]);