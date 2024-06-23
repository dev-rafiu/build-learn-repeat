import { lazy } from "react";
// import { wait } from "../main";

// export function lazyLoad(path: string, namedExport: string | null) {
//   return lazy(() => {
//     const promise = import(path);
//     if (namedExport === null) {
//       return promise;
//     } else {
//       return promise.then((module) => ({ default: module[namedExport] }));
//     }
//   });
// }

export function lazyLoad(path: string, namedExport: string | null) {
  if (namedExport === null) {
    return lazy(() => import(path));
  } else {
    return lazy(() =>
      import(path).then((module) => ({ default: module[namedExport] }))
    );
  }
}
