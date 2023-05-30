"use strict";
var InputMethod;
(function (InputMethod) {
    InputMethod["Keyboard"] = "Keyboard";
    InputMethod["Voice"] = "Voice";
    InputMethod["Unknown"] = "Unknown";
})(InputMethod || (InputMethod = {}));
var MessageType;
(function (MessageType) {
    MessageType["ActionRequest"] = "ActionRequest";
    MessageType["Chat"] = "Chat";
    MessageType["Context"] = "Context";
    MessageType["InternalSearchQuery"] = "InternalSearchQuery";
    MessageType["InternalSearchResult"] = "InternalSearchResult";
    MessageType["Disengaged"] = "Disengaged";
    MessageType["InternalLoaderMessage"] = "InternalLoaderMessage";
    MessageType["Progress"] = "Progress";
    MessageType["RenderCardRequest"] = "RenderCardRequest";
    MessageType["AdsQuery"] = "AdsQuery";
    MessageType["SemanticSerp"] = "SemanticSerp";
    MessageType["GenerateContentQuery"] = "GenerateContentQuery";
    MessageType["SearchQuery"] = "SearchQuery";
})(MessageType || (MessageType = {}));
var OptionSet;
(function (OptionSet) {
    OptionSet["nlu_direct_response_filter"] = "nlu_direct_response_filter";
    OptionSet["deepleo"] = "deepleo";
    OptionSet["disable_emoji_spoken_text"] = "disable_emoji_spoken_text";
    OptionSet["responsible_ai_policy_235"] = "responsible_ai_policy_235";
    OptionSet["enablemm"] = "enablemm";
    OptionSet["h3imaginative"] = "h3imaginative";
    OptionSet["dsblhlthcrd"] = "dsblhlthcrd";
    OptionSet["rcspflt"] = "rcspflt";
    OptionSet["knowimgv2"] = "knowimgv2";
    OptionSet["dv3sugg"] = "dv3sugg";
    OptionSet["autosave"] = "autosave";
    OptionSet["clgalileo"] = "clgalileo";
    OptionSet["gencontentv3"] = "gencontentv3";
    OptionSet["prompttrcp"] = "prompttrcp";
})(OptionSet || (OptionSet = {}));
var Author;
(function (Author) {
    Author["Bot"] = "bot";
    Author["User"] = "user";
    Author["System"] = "system";
})(Author || (Author = {}));
var OffenseType;
(function (OffenseType) {
    OffenseType["None"] = "None";
    OffenseType["Unkown"] = "Unkown";
    OffenseType["OffenseTrigger"] = "OffenseTrigger";
})(OffenseType || (OffenseType = {}));
var Tone;
(function (Tone) {
    Tone[Tone["Creative"] = 0] = "Creative";
    Tone[Tone["Analytical"] = 1] = "Analytical";
})(Tone || (Tone = {}));
