declare enum InputMethod {
    "Keyboard" = 0,
    "Voice" = 1,
    "Unknown" = 2
}
declare enum MessageType {
    "ActionRequest" = 0,
    "Chat" = 1,
    "Context" = 2,
    "InternalSearchQuery" = 3,
    "InternalSearchResult" = 4,
    "Disengaged" = 5,
    "InternalLoaderMessage" = 6,
    "Progress" = 7,
    "RenderCardRequest" = 8,
    "AdsQuery" = 9,
    "SemanticSerp" = 10,
    "GenerateContentQuery" = 11,
    "SearchQuery" = 12
}
declare enum OptionSet {
    "nlu_direct_response_filter" = 0,
    "deepleo" = 1,
    "disable_emoji_spoken_text" = 2,
    "responsible_ai_policy_235" = 3,
    "enablemm" = 4,
    "h3imaginative" = 5,
    "dsblhlthcrd" = 6,
    "rcspflt" = 7,
    "knowimgv2" = 8,
    "dv3sugg" = 9,
    "autosave" = 10,
    "clgalileo" = 11,
    "gencontentv3" = 12,
    "prompttrcp" = 13
}
declare enum Author {
    Bot = "bot",
    User = "user",
    System = "system"
}
declare enum OffenseType {
    None = "None",
    Unkown = "Unkown",
    OffenseTrigger = "OffenseTrigger"
}
declare enum Tone {
    "Creative" = 0,
    "Analytical" = 1
}
