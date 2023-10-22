// why do this? weare exporting every damn thing(*) from each file to index.js, so that we can be able to export every utils fron index,js rather than specifically specifying a utils file

export * from "./colors";
export * from "./elevation";
export * from "./typography";
export * from "./themes";
export * from "./Global";