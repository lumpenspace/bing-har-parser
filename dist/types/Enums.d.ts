declare enum InputMethod {
    Keyboard = "Keyboard",
    Voice = "Voice",
    Unknown = "Unknown"
}
declare enum MessageType {
    ActionRequest = "ActionRequest",
    Chat = "Chat",
    Context = "Context",
    InternalSearchQuery = "InternalSearchQuery",
    InternalSearchResult = "InternalSearchResult",
    Disengaged = "Disengaged",
    InternalLoaderMessage = "InternalLoaderMessage",
    Progress = "Progress",
    RenderCardRequest = "RenderCardRequest",
    AdsQuery = "AdsQuery",
    SemanticSerp = "SemanticSerp",
    GenerateContentQuery = "GenerateContentQuery",
    SearchQuery = "SearchQuery"
}
declare enum OptionSet {
    nlu_direct_response_filter = "nlu_direct_response_filter",
    deepleo = "deepleo",
    disable_emoji_spoken_text = "disable_emoji_spoken_text",
    responsible_ai_policy_235 = "responsible_ai_policy_235",
    enablemm = "enablemm",
    h3imaginative = "h3imaginative",
    dsblhlthcrd = "dsblhlthcrd",
    rcspflt = "rcspflt",
    knowimgv2 = "knowimgv2",
    dv3sugg = "dv3sugg",
    autosave = "autosave",
    clgalileo = "clgalileo",
    gencontentv3 = "gencontentv3",
    prompttrcp = "prompttrcp"
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
