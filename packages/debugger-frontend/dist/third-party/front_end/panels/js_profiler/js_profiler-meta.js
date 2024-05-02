import*as e from"../../core/i18n/i18n.js";import"../../core/root/root.js";import*as t from"../../ui/legacy/legacy.js";const i={profiler:"Profiler",showProfiler:"Show Profiler",startStopRecording:"Start/stop recording",showRecentTimelineSessions:"Show recent timeline sessions",record:"Record",stop:"Stop",startProfilingAndReloadPage:"Start profiling and reload page"},o=e.i18n.registerUIStrings("panels/js_profiler/js_profiler-meta.ts",i),n=e.i18n.getLazilyComputedLocalizedString.bind(void 0,o);let r,l;async function a(){return l||(l=await import("../profiler/profiler.js")),l}async function s(){return r||(r=await import("../timeline/timeline.js")),r}function c(e){return void 0===r?[]:e(r)}t.ViewManager.registerViewExtension({location:"panel",id:"js-profiler",title:n(i.profiler),commandPrompt:n(i.showProfiler),order:65,persistence:"permanent",experiment:"js-profiler-temporarily-enable",loadView:async()=>(await a()).ProfilesPanel.JSProfilerPanel.instance()}),t.ActionRegistration.registerActionExtension({actionId:"profiler.js-toggle-recording",category:"JAVASCRIPT_PROFILER",title:n(i.startStopRecording),iconClass:"record-start",toggleable:!0,toggledIconClass:"record-stop",toggleWithRedColor:!0,contextTypes(){return e=e=>[e.ProfilesPanel.JSProfilerPanel],void 0===l?[]:e(l);var e},loadActionDelegate:async()=>(await a()).ProfilesPanel.JSProfilerPanel.instance(),bindings:[{platform:"windows,linux",shortcut:"Ctrl+E"},{platform:"mac",shortcut:"Meta+E"}]}),t.ActionRegistration.registerActionExtension({actionId:"timeline.show-history",loadActionDelegate:async()=>new((await s()).TimelinePanel.ActionDelegate),category:"PERFORMANCE",title:n(i.showRecentTimelineSessions),contextTypes:()=>c((e=>[e.TimelinePanel.TimelinePanel])),bindings:[{platform:"windows,linux",shortcut:"Ctrl+H"},{platform:"mac",shortcut:"Meta+Y"}]}),t.ActionRegistration.registerActionExtension({actionId:"timeline.toggle-recording",category:"PERFORMANCE",iconClass:"record-start",toggleable:!0,toggledIconClass:"record-stop",toggleWithRedColor:!0,contextTypes:()=>c((e=>[e.TimelinePanel.TimelinePanel])),loadActionDelegate:async()=>new((await s()).TimelinePanel.ActionDelegate),options:[{value:!0,title:n(i.record)},{value:!1,title:n(i.stop)}],bindings:[{platform:"windows,linux",shortcut:"Ctrl+E"},{platform:"mac",shortcut:"Meta+E"}]}),t.ActionRegistration.registerActionExtension({actionId:"timeline.record-reload",iconClass:"refresh",contextTypes:()=>c((e=>[e.TimelinePanel.TimelinePanel])),category:"PERFORMANCE",title:n(i.startProfilingAndReloadPage),loadActionDelegate:async()=>new((await s()).TimelinePanel.ActionDelegate),bindings:[{platform:"windows,linux",shortcut:"Ctrl+Shift+E"},{platform:"mac",shortcut:"Meta+Shift+E"}]});
