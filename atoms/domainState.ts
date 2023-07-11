import { atom } from "recoil";

const domainState = atom({
  key: "textState",
  default: { inner: [] },
});

export {domainState}