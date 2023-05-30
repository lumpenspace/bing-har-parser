"use strict";
var InputMethod;
(function (InputMethod) {
    InputMethod[InputMethod["Keyboard"] = 0] = "Keyboard";
    InputMethod[InputMethod["Voice"] = 1] = "Voice";
    InputMethod[InputMethod["Unknown"] = 2] = "Unknown";
})(InputMethod || (InputMethod = {}));
var MessageType;
(function (MessageType) {
    MessageType[MessageType["ActionRequest"] = 0] = "ActionRequest";
    MessageType[MessageType["Chat"] = 1] = "Chat";
    MessageType[MessageType["Context"] = 2] = "Context";
    MessageType[MessageType["InternalSearchQuery"] = 3] = "InternalSearchQuery";
    MessageType[MessageType["InternalSearchResult"] = 4] = "InternalSearchResult";
    MessageType[MessageType["Disengaged"] = 5] = "Disengaged";
    MessageType[MessageType["InternalLoaderMessage"] = 6] = "InternalLoaderMessage";
    MessageType[MessageType["Progress"] = 7] = "Progress";
    MessageType[MessageType["RenderCardRequest"] = 8] = "RenderCardRequest";
    MessageType[MessageType["AdsQuery"] = 9] = "AdsQuery";
    MessageType[MessageType["SemanticSerp"] = 10] = "SemanticSerp";
    MessageType[MessageType["GenerateContentQuery"] = 11] = "GenerateContentQuery";
    MessageType[MessageType["SearchQuery"] = 12] = "SearchQuery";
})(MessageType || (MessageType = {}));
var OptionSet;
(function (OptionSet) {
    OptionSet[OptionSet["nlu_direct_response_filter"] = 0] = "nlu_direct_response_filter";
    OptionSet[OptionSet["deepleo"] = 1] = "deepleo";
    OptionSet[OptionSet["disable_emoji_spoken_text"] = 2] = "disable_emoji_spoken_text";
    OptionSet[OptionSet["responsible_ai_policy_235"] = 3] = "responsible_ai_policy_235";
    OptionSet[OptionSet["enablemm"] = 4] = "enablemm";
    OptionSet[OptionSet["h3imaginative"] = 5] = "h3imaginative";
    OptionSet[OptionSet["dsblhlthcrd"] = 6] = "dsblhlthcrd";
    OptionSet[OptionSet["rcspflt"] = 7] = "rcspflt";
    OptionSet[OptionSet["knowimgv2"] = 8] = "knowimgv2";
    OptionSet[OptionSet["dv3sugg"] = 9] = "dv3sugg";
    OptionSet[OptionSet["autosave"] = 10] = "autosave";
    OptionSet[OptionSet["clgalileo"] = 11] = "clgalileo";
    OptionSet[OptionSet["gencontentv3"] = 12] = "gencontentv3";
    OptionSet[OptionSet["prompttrcp"] = 13] = "prompttrcp";
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
