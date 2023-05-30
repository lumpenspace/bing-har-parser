enum InputMethod {
  "Keyboard",
  "Voice",
  "Unknown"
}

enum MessageType {
  "ActionRequest",
  "Chat",
  "Context",
  "InternalSearchQuery",
  "InternalSearchResult",
  "Disengaged",
  "InternalLoaderMessage",
  "Progress",
  "RenderCardRequest",
  "AdsQuery",
  "SemanticSerp",
  "GenerateContentQuery",
  "SearchQuery"
}

enum OptionSet {
  "nlu_direct_response_filter",
  "deepleo",
  "disable_emoji_spoken_text",
  "responsible_ai_policy_235",
  "enablemm",
  "h3imaginative",
  "dsblhlthcrd",
  "rcspflt",
  "knowimgv2",
  "dv3sugg",
  "autosave",
  "clgalileo",
  "gencontentv3",
  "prompttrcp"
}


enum Author {
  Bot = "bot",
  User = "user",
  System = "system",
}

enum OffenseType {
  None = "None",
  Unkown = "Unkown",
  OffenseTrigger = "OffenseTrigger"
}

enum Tone {
  "Creative",
  "Analytical"
}
