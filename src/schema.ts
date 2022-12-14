export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      allies: {
        Row: {
          id: number
          theme: Database["public"]["Enums"]["themes"]
          image: string
          is_evil_ally: boolean
          ability_names: string[]
          ability_effects: string[]
        }
        Insert: {
          id: number
          theme: Database["public"]["Enums"]["themes"]
          image: string
          is_evil_ally?: boolean
          ability_names: string[]
          ability_effects: string[]
        }
        Update: {
          id?: number
          theme?: Database["public"]["Enums"]["themes"]
          image?: string
          is_evil_ally?: boolean
          ability_names?: string[]
          ability_effects?: string[]
        }
      }
      comp_villains: {
        Row: {
          id: number
          villain_id: number
          original_image: string | null
          trait_keywords: string[]
          ability_names: string[]
          ability_effects: string[]
          move_attribute: number
          attack_attribute: number
          defend_attribute: number
          life_attribute: number
          awakening_attribute: number
        }
        Insert: {
          id?: number
          villain_id: number
          original_image?: string | null
          trait_keywords: string[]
          ability_names: string[]
          ability_effects: string[]
          move_attribute: number
          attack_attribute: number
          defend_attribute: number
          life_attribute: number
          awakening_attribute: number
        }
        Update: {
          id?: number
          villain_id?: number
          original_image?: string | null
          trait_keywords?: string[]
          ability_names?: string[]
          ability_effects?: string[]
          move_attribute?: number
          attack_attribute?: number
          defend_attribute?: number
          life_attribute?: number
          awakening_attribute?: number
        }
      }
      coop_villains: {
        Row: {
          id: number
          villain_id: number
          original_image: string | null
          trait_keywords: string[]
          ability_names: string[]
          ability_effects: string[]
          move_attribute: number
          attack_attribute: number
          defend_attribute: number
          life_attribute: number
          target_priority: number
          target_highest: boolean
        }
        Insert: {
          id?: number
          villain_id: number
          original_image?: string | null
          trait_keywords: string[]
          ability_names: string[]
          ability_effects: string[]
          move_attribute: number
          attack_attribute: number
          defend_attribute: number
          life_attribute: number
          target_priority: number
          target_highest?: boolean
        }
        Update: {
          id?: number
          villain_id?: number
          original_image?: string | null
          trait_keywords?: string[]
          ability_names?: string[]
          ability_effects?: string[]
          move_attribute?: number
          attack_attribute?: number
          defend_attribute?: number
          life_attribute?: number
          target_priority?: number
          target_highest?: boolean
        }
      }
      event_cards: {
        Row: {
          id: number
          theme: Database["public"]["Enums"]["themes"]
          deck_id: number
          image: string
          effect: string
        }
        Insert: {
          id: number
          theme: Database["public"]["Enums"]["themes"]
          deck_id: number
          image: string
          effect: string
        }
        Update: {
          id?: number
          theme?: Database["public"]["Enums"]["themes"]
          deck_id?: number
          image?: string
          effect?: string
        }
      }
      event_decks: {
        Row: {
          id: number
          theme: Database["public"]["Enums"]["themes"]
          image: string | null
          color: string | null
        }
        Insert: {
          id: number
          theme: Database["public"]["Enums"]["themes"]
          image?: string | null
          color?: string | null
        }
        Update: {
          id?: number
          theme?: Database["public"]["Enums"]["themes"]
          image?: string | null
          color?: string | null
        }
      }
      gadgets: {
        Row: {
          id: number
          theme: Database["public"]["Enums"]["themes"]
          image: string
          ability_name: string
          ability_effect: string
        }
        Insert: {
          id: number
          theme: Database["public"]["Enums"]["themes"]
          image: string
          ability_name: string
          ability_effect: string
        }
        Update: {
          id?: number
          theme?: Database["public"]["Enums"]["themes"]
          image?: string
          ability_name?: string
          ability_effect?: string
        }
      }
      heroes: {
        Row: {
          id: number
          theme: Database["public"]["Enums"]["themes"]
          token_id: number | null
          sheet_background_color: string
          dice_icon_color: string
          dice_background_color: string
          trait_keywords: string
          ability_names: string[]
          ability_effects: string[]
          icon_image: string | null
          hero_image: string
          hero_image_scale: number
          hero_image_position_left: number
          hero_image_position_top: number
          move_attribute: number
          attack_attribute: number
          defend_attribute: number
          skill_attribute: number
          focus_attribute: number
          life_attribute: number
          awakening_attribute: number
          action_dice: Database["public"]["Enums"]["dice_icons"][]
          is_support_figure: boolean
          name_font_size: number | null
          keywords_font_size: number | null
          ability_name_font_size: number | null
          ability_effect_font_size: number | null
        }
        Insert: {
          id: number
          theme: Database["public"]["Enums"]["themes"]
          token_id?: number | null
          sheet_background_color: string
          dice_icon_color: string
          dice_background_color: string
          trait_keywords: string
          ability_names: string[]
          ability_effects: string[]
          icon_image?: string | null
          hero_image: string
          hero_image_scale: number
          hero_image_position_left: number
          hero_image_position_top: number
          move_attribute: number
          attack_attribute: number
          defend_attribute: number
          skill_attribute: number
          focus_attribute: number
          life_attribute: number
          awakening_attribute: number
          action_dice: Database["public"]["Enums"]["dice_icons"][]
          is_support_figure?: boolean
          name_font_size?: number | null
          keywords_font_size?: number | null
          ability_name_font_size?: number | null
          ability_effect_font_size?: number | null
        }
        Update: {
          id?: number
          theme?: Database["public"]["Enums"]["themes"]
          token_id?: number | null
          sheet_background_color?: string
          dice_icon_color?: string
          dice_background_color?: string
          trait_keywords?: string
          ability_names?: string[]
          ability_effects?: string[]
          icon_image?: string | null
          hero_image?: string
          hero_image_scale?: number
          hero_image_position_left?: number
          hero_image_position_top?: number
          move_attribute?: number
          attack_attribute?: number
          defend_attribute?: number
          skill_attribute?: number
          focus_attribute?: number
          life_attribute?: number
          awakening_attribute?: number
          action_dice?: Database["public"]["Enums"]["dice_icons"][]
          is_support_figure?: boolean
          name_font_size?: number | null
          keywords_font_size?: number | null
          ability_name_font_size?: number | null
          ability_effect_font_size?: number | null
        }
      }
      homebrew_ratings: {
        Row: {
          id: number
          homebrew_id: number
          user_id: string
        }
        Insert: {
          id?: number
          homebrew_id: number
          user_id: string
        }
        Update: {
          id?: number
          homebrew_id?: number
          user_id?: string
        }
      }
      homebrew_saves: {
        Row: {
          id: number
          homebrew_id: number
          user_id: string
        }
        Insert: {
          id?: number
          homebrew_id: number
          user_id: string
        }
        Update: {
          id?: number
          homebrew_id?: number
          user_id?: string
        }
      }
      homebrews: {
        Row: {
          id: number
          user_id: string
          name: string
          description: string | null
          original_image: string | null
          augs_license: Database["public"]["Enums"]["augs_licenses"]
          homebrew_category: Database["public"]["Enums"]["homebrew_categories"]
          date_created: string
          date_modified: string
          is_deleted: boolean
        }
        Insert: {
          id?: number
          user_id: string
          name: string
          description?: string | null
          original_image?: string | null
          augs_license?: Database["public"]["Enums"]["augs_licenses"]
          homebrew_category: Database["public"]["Enums"]["homebrew_categories"]
          date_created?: string
          date_modified?: string
          is_deleted?: boolean
        }
        Update: {
          id?: number
          user_id?: string
          name?: string
          description?: string | null
          original_image?: string | null
          augs_license?: Database["public"]["Enums"]["augs_licenses"]
          homebrew_category?: Database["public"]["Enums"]["homebrew_categories"]
          date_created?: string
          date_modified?: string
          is_deleted?: boolean
        }
      }
      map_tiles: {
        Row: {
          id: number
          image: string
          number: string
        }
        Insert: {
          id: number
          image: string
          number: string
        }
        Update: {
          id?: number
          image?: string
          number?: string
        }
      }
      posts: {
        Row: {
          id: number
          homebrew_id: number
          user_id: string
          parent_id: number | null
          content: string | null
          date_created: string
          date_modified: string
        }
        Insert: {
          id?: number
          homebrew_id: number
          user_id: string
          parent_id?: number | null
          content?: string | null
          date_created?: string
          date_modified?: string
        }
        Update: {
          id?: number
          homebrew_id?: number
          user_id?: string
          parent_id?: number | null
          content?: string | null
          date_created?: string
          date_modified?: string
        }
      }
      roles: {
        Row: {
          id: number
          name: string
          color: string
        }
        Insert: {
          id?: number
          name: string
          color: string
        }
        Update: {
          id?: number
          name?: string
          color?: string
        }
      }
      skill_cards: {
        Row: {
          id: number
          hero_id: number
          theme: Database["public"]["Enums"]["themes"]
          image: string
          ability_name: string
          ability_effect: string
          ability_cost: Database["public"]["Enums"]["skill_card_icons"][]
        }
        Insert: {
          id: number
          hero_id: number
          theme: Database["public"]["Enums"]["themes"]
          image: string
          ability_name: string
          ability_effect: string
          ability_cost: Database["public"]["Enums"]["skill_card_icons"][]
        }
        Update: {
          id?: number
          hero_id?: number
          theme?: Database["public"]["Enums"]["themes"]
          image?: string
          ability_name?: string
          ability_effect?: string
          ability_cost?: Database["public"]["Enums"]["skill_card_icons"][]
        }
      }
      tokens: {
        Row: {
          id: number
          image: string
          category: Database["public"]["Enums"]["token_categories"]
          grid_size_x: number
          grid_size_y: number
        }
        Insert: {
          id: number
          image: string
          category: Database["public"]["Enums"]["token_categories"]
          grid_size_x?: number
          grid_size_y?: number
        }
        Update: {
          id?: number
          image?: string
          category?: Database["public"]["Enums"]["token_categories"]
          grid_size_x?: number
          grid_size_y?: number
        }
      }
      user_profiles: {
        Row: {
          id: string
          role_id: number
          user_name: string | null
          avatar: string | null
          discord: string | null
          boardgamegeek: string | null
          date_created: string
          date_modified: string
          is_deleted: boolean
        }
        Insert: {
          id: string
          role_id?: number
          user_name?: string | null
          avatar?: string | null
          discord?: string | null
          boardgamegeek?: string | null
          date_created?: string
          date_modified?: string
          is_deleted?: boolean
        }
        Update: {
          id?: string
          role_id?: number
          user_name?: string | null
          avatar?: string | null
          discord?: string | null
          boardgamegeek?: string | null
          date_created?: string
          date_modified?: string
          is_deleted?: boolean
        }
      }
      villain_card_figure_actions: {
        Row: {
          id: number
          villain_card_id: number
          figure_name: string
          actions: Database["public"]["Enums"]["dice_icons"][]
        }
        Insert: {
          id: number
          villain_card_id: number
          figure_name: string
          actions: Database["public"]["Enums"]["dice_icons"][]
        }
        Update: {
          id?: number
          villain_card_id?: number
          figure_name?: string
          actions?: Database["public"]["Enums"]["dice_icons"][]
        }
      }
      villain_cards: {
        Row: {
          id: number
          villain_id: number
          theme: Database["public"]["Enums"]["themes"]
          image: string
          ability_name: string
          ability_effect: string
        }
        Insert: {
          id: number
          villain_id: number
          theme: Database["public"]["Enums"]["themes"]
          image: string
          ability_name: string
          ability_effect: string
        }
        Update: {
          id?: number
          villain_id?: number
          theme?: Database["public"]["Enums"]["themes"]
          image?: string
          ability_name?: string
          ability_effect?: string
        }
      }
      villain_target_priorities: {
        Row: {
          id: number
          name: string
          description: string | null
          image: string
        }
        Insert: {
          id?: number
          name: string
          description?: string | null
          image: string
        }
        Update: {
          id?: number
          name?: string
          description?: string | null
          image?: string
        }
      }
      villains: {
        Row: {
          id: number
          theme: Database["public"]["Enums"]["themes"]
          token_id: number
          background_color: string
          icon_image: string
          villain_image: string
        }
        Insert: {
          id: number
          theme: Database["public"]["Enums"]["themes"]
          token_id: number
          background_color: string
          icon_image: string
          villain_image: string
        }
        Update: {
          id?: number
          theme?: Database["public"]["Enums"]["themes"]
          token_id?: number
          background_color?: string
          icon_image?: string
          villain_image?: string
        }
      }
    }
    Views: {
      heroes_table: {
        Row: {
          id: number | null
          user_id: string | null
          user_name: string | null
          name: string | null
          description: string | null
          hero_image: string | null
          hero_image_position_left: number | null
          hero_image_position_top: number | null
          hero_image_scale: number | null
          icon_image: string | null
          theme: Database["public"]["Enums"]["themes"] | null
          token_id: number | null
          token_image: string | null
          trait_keywords: string | null
          ability_effects: string[] | null
          ability_names: string[] | null
          action_dice: Database["public"]["Enums"]["dice_icons"][] | null
          sheet_background_color: string | null
          dice_background_color: string | null
          dice_icon_color: string | null
          attack_attribute: number | null
          defend_attribute: number | null
          focus_attribute: number | null
          move_attribute: number | null
          skill_attribute: number | null
          life_attribute: number | null
          awakening_attribute: number | null
          is_support_figure: boolean | null
          homebrew_category:
            | Database["public"]["Enums"]["homebrew_categories"]
            | null
          augs_license: Database["public"]["Enums"]["augs_licenses"] | null
          date_created: string | null
          date_modified: string | null
          original_image: string | null
          is_deleted: boolean | null
          name_font_size: number | null
          keywords_font_size: number | null
          ability_name_font_size: number | null
          ability_effect_font_size: number | null
        }
      }
      tokens_table: {
        Row: {
          id: number | null
          user_id: string | null
          user_name: string | null
          name: string | null
          description: string | null
          image: string | null
          homebrew_category:
            | Database["public"]["Enums"]["homebrew_categories"]
            | null
          augs_license: Database["public"]["Enums"]["augs_licenses"] | null
          date_created: string | null
          date_modified: string | null
          original_image: string | null
          is_deleted: boolean | null
        }
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      augs_licenses: "TMNT" | "BTAS" | "Homebrew"
      dice_icons:
        | "Melee"
        | "Range"
        | "Move"
        | "Defend"
        | "Focus"
        | "DoubleMelee"
        | "DoubleRange"
        | "DoubleMove"
        | "DefendMelee"
        | "DefendRange"
        | "DefendMove"
      homebrew_categories:
        | "Heroes"
        | "Villains"
        | "MapTiles"
        | "Tokens"
        | "Scenarios"
        | "EventDecks"
        | "SkillCards"
        | "VillainDecks"
        | "Gadgets"
        | "Allies"
      skill_card_icons:
        | "Melee"
        | "Range"
        | "Move"
        | "Defend"
        | "Focus"
        | "DoubleMelee"
        | "DoubleRange"
        | "DoubleMove"
        | "DefendMelee"
        | "DefendRange"
        | "DefendMove"
        | "Persistent"
        | "OneTimeUse"
        | "Wild"
      themes: "TMNT" | "BTAS"
      token_categories:
        | "BlockingTerrain"
        | "CoveredTerrain"
        | "ElevatedTerrain"
        | "HarmfulTerrain"
        | "ObscuringTerrain"
        | "RoughTerrain"
        | "SlowTerrain"
        | "UnstableTerrain"
        | "NeutralTerrain"
        | "MixedTerrain"
        | "Focus"
        | "Dice"
        | "Doors"
        | "Figures"
        | "Goals"
        | "Wounds"
        | "Objectives"
        | "Objects"
        | "Spawns"
        | "Statuses"
    }
  }
}
