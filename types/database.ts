export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
	public: {
		Tables: {
			categories: {
				Row: {
					created_at: string
					id: number
					name: string
				}
				Insert: {
					created_at?: string
					id?: number
					name: string
				}
				Update: {
					created_at?: string
					id?: number
					name?: string
				}
				Relationships: []
			}
			clients: {
				Row: {
					created_at: string
					date_of_birth: string | null
					email: string | null
					first_name: string
					id: number
					last_name: string | null
					phone_number: string | null
					social_media_profiles: Json | null
				}
				Insert: {
					created_at?: string
					date_of_birth?: string | null
					email?: string | null
					first_name: string
					id?: number
					last_name?: string | null
					phone_number?: string | null
					social_media_profiles?: Json | null
				}
				Update: {
					created_at?: string
					date_of_birth?: string | null
					email?: string | null
					first_name?: string
					id?: number
					last_name?: string | null
					phone_number?: string | null
					social_media_profiles?: Json | null
				}
				Relationships: []
			}
			employees: {
				Row: {
					created_at: string
					date_of_birth: string | null
					email: string | null
					first_name: string
					id: number
					last_name: string | null
					phone_number: string | null
					social_media_profiles: Json | null
				}
				Insert: {
					created_at?: string
					date_of_birth?: string | null
					email?: string | null
					first_name: string
					id?: number
					last_name?: string | null
					phone_number?: string | null
					social_media_profiles?: Json | null
				}
				Update: {
					created_at?: string
					date_of_birth?: string | null
					email?: string | null
					first_name?: string
					id?: number
					last_name?: string | null
					phone_number?: string | null
					social_media_profiles?: Json | null
				}
				Relationships: []
			}
			orders: {
				Row: {
					category: string
					client: number | null
					cost: number
					created_at: string
					employee: number | null
					id: number
					status: string
					subcategory: string | null
				}
				Insert: {
					category: string
					client?: number | null
					cost: number
					created_at?: string
					employee?: number | null
					id?: number
					status: string
					subcategory?: string | null
				}
				Update: {
					category?: string
					client?: number | null
					cost?: number
					created_at?: string
					employee?: number | null
					id?: number
					status?: string
					subcategory?: string | null
				}
				Relationships: [
					{
						foreignKeyName: "orders_client_fkey"
						columns: ["client"]
						isOneToOne: false
						referencedRelation: "clients"
						referencedColumns: ["id"]
					},
					{
						foreignKeyName: "orders_employee_fkey"
						columns: ["employee"]
						isOneToOne: false
						referencedRelation: "employees"
						referencedColumns: ["id"]
					},
				]
			}
			products: {
				Row: {
					category: number | null
					created_at: string
					id: number
					name: string | null
					status: string | null
					subcategory: number | null
				}
				Insert: {
					category?: number | null
					created_at?: string
					id?: number
					name?: string | null
					status?: string | null
					subcategory?: number | null
				}
				Update: {
					category?: number | null
					created_at?: string
					id?: number
					name?: string | null
					status?: string | null
					subcategory?: number | null
				}
				Relationships: [
					{
						foreignKeyName: "products_category_fkey"
						columns: ["category"]
						isOneToOne: false
						referencedRelation: "categories"
						referencedColumns: ["id"]
					},
					{
						foreignKeyName: "products_subcategory_fkey"
						columns: ["subcategory"]
						isOneToOne: false
						referencedRelation: "subcategories"
						referencedColumns: ["id"]
					},
				]
			}
			subcategories: {
				Row: {
					category: number | null
					created_at: string
					id: number
					name: string
				}
				Insert: {
					category?: number | null
					created_at?: string
					id?: number
					name: string
				}
				Update: {
					category?: number | null
					created_at?: string
					id?: number
					name?: string
				}
				Relationships: [
					{
						foreignKeyName: "subcategories_category_fkey"
						columns: ["category"]
						isOneToOne: false
						referencedRelation: "categories"
						referencedColumns: ["id"]
					},
				]
			}
		}
		Views: {
			[_ in never]: never
		}
		Functions: {
			[_ in never]: never
		}
		Enums: {
			[_ in never]: never
		}
		CompositeTypes: {
			[_ in never]: never
		}
	}
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
	PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"]) | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] & Database[PublicTableNameOrOptions["schema"]]["Views"])
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions["schema"]]["Tables"] & Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
		? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
				Row: infer R
			}
			? R
			: never
		: never

export type TablesInsert<
	PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database } ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"] : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Insert: infer I
			}
			? I
			: never
		: never

export type TablesUpdate<
	PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database } ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"] : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Update: infer U
			}
			? U
			: never
		: never

export type Enums<
	PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database } ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"] : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
		? PublicSchema["Enums"][PublicEnumNameOrOptions]
		: never

export type CompositeTypes<
	PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"] | { schema: keyof Database },
	CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
		schema: keyof Database
	}
		? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
		: never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
	? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
	: PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
		? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
		: never
