// AVOID UPDATING THIS FILE DIRECTLY. It is automatically generated.
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.5'
  }
  public: {
    Tables: {
      cta_clicks: {
        Row: {
          created_at: string
          cta_id: string
          id: string
          sessao_hash: string | null
        }
        Insert: {
          created_at?: string
          cta_id: string
          id?: string
          sessao_hash?: string | null
        }
        Update: {
          created_at?: string
          cta_id?: string
          id?: string
          sessao_hash?: string | null
        }
        Relationships: []
      }
      lead_events: {
        Row: {
          autor: string | null
          created_at: string
          descricao: string | null
          id: string
          lead_id: string
          tipo: string
        }
        Insert: {
          autor?: string | null
          created_at?: string
          descricao?: string | null
          id?: string
          lead_id: string
          tipo: string
        }
        Update: {
          autor?: string | null
          created_at?: string
          descricao?: string | null
          id?: string
          lead_id?: string
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: 'lead_events_lead_id_fkey'
            columns: ['lead_id']
            isOneToOne: false
            referencedRelation: 'leads'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'lead_events_lead_id_fkey'
            columns: ['lead_id']
            isOneToOne: false
            referencedRelation: 'vw_leads_recentes'
            referencedColumns: ['id']
          },
        ]
      }
      leads: {
        Row: {
          anotacoes: string | null
          consentimento_lgpd: boolean
          created_at: string
          data_contato: string | null
          data_fechamento: string | null
          data_proposta: string | null
          email: string
          empresa: string | null
          faturamento: string | null
          id: string
          interesses: string[] | null
          ip_hash: string | null
          mensagem: string | null
          nome: string
          origem: string | null
          pagina_origem: string | null
          responsavel: string | null
          score: number | null
          status: string
          telefone: string | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
          valor_estimado: number | null
        }
        Insert: {
          anotacoes?: string | null
          consentimento_lgpd?: boolean
          created_at?: string
          data_contato?: string | null
          data_fechamento?: string | null
          data_proposta?: string | null
          email: string
          empresa?: string | null
          faturamento?: string | null
          id?: string
          interesses?: string[] | null
          ip_hash?: string | null
          mensagem?: string | null
          nome: string
          origem?: string | null
          pagina_origem?: string | null
          responsavel?: string | null
          score?: number | null
          status?: string
          telefone?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          valor_estimado?: number | null
        }
        Update: {
          anotacoes?: string | null
          consentimento_lgpd?: boolean
          created_at?: string
          data_contato?: string | null
          data_fechamento?: string | null
          data_proposta?: string | null
          email?: string
          empresa?: string | null
          faturamento?: string | null
          id?: string
          interesses?: string[] | null
          ip_hash?: string | null
          mensagem?: string | null
          nome?: string
          origem?: string | null
          pagina_origem?: string | null
          responsavel?: string | null
          score?: number | null
          status?: string
          telefone?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          valor_estimado?: number | null
        }
        Relationships: []
      }
      page_views: {
        Row: {
          created_at: string
          id: string
          pagina: string | null
          referrer: string | null
          sessao_hash: string | null
          user_agent: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          pagina?: string | null
          referrer?: string | null
          sessao_hash?: string | null
          user_agent?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          pagina?: string | null
          referrer?: string | null
          sessao_hash?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      vw_cta_performance: {
        Row: {
          clicks_24h: number | null
          clicks_7d: number | null
          cta_id: string | null
          total_clicks: number | null
        }
        Relationships: []
      }
      vw_interesses: {
        Row: {
          interesse: string | null
          total: number | null
        }
        Relationships: []
      }
      vw_leads_recentes: {
        Row: {
          created_at: string | null
          email: string | null
          empresa: string | null
          faturamento: string | null
          id: string | null
          interesses: string[] | null
          nome: string | null
          score: number | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          empresa?: string | null
          faturamento?: string | null
          id?: string | null
          interesses?: string[] | null
          nome?: string | null
          score?: number | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          empresa?: string | null
          faturamento?: string | null
          id?: string | null
          interesses?: string[] | null
          nome?: string | null
          score?: number | null
          status?: string | null
        }
        Relationships: []
      }
      vw_pipeline: {
        Row: {
          score_medio: number | null
          score_medio_qualificados: number | null
          status: string | null
          total_leads: number | null
          valor_pipeline: number | null
        }
        Relationships: []
      }
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

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

// ====== DATABASE EXTENDED CONTEXT (auto-generated) ======
// This section contains actual PostgreSQL column types, constraints, RLS policies,
// functions, triggers, indexes and materialized views not present in the type definitions above.
// IMPORTANT: The TypeScript types above map UUID, TEXT, VARCHAR all to "string".
// Use the COLUMN TYPES section below to know the real PostgreSQL type for each column.
// Always use the correct PostgreSQL type when writing SQL migrations.

// --- COLUMN TYPES (actual PostgreSQL types) ---
// Use this to know the real database type when writing migrations.
// "string" in TypeScript types above may be uuid, text, varchar, timestamptz, etc.
// Table: cta_clicks
//   id: uuid (not null, default: gen_random_uuid())
//   created_at: timestamp with time zone (not null, default: now())
//   cta_id: text (not null)
//   sessao_hash: text (nullable)
// Table: lead_events
//   id: uuid (not null, default: gen_random_uuid())
//   created_at: timestamp with time zone (not null, default: now())
//   lead_id: uuid (not null)
//   tipo: text (not null)
//   descricao: text (nullable)
//   autor: text (nullable)
// Table: leads
//   id: uuid (not null, default: gen_random_uuid())
//   created_at: timestamp with time zone (not null, default: now())
//   nome: text (not null)
//   email: text (not null)
//   telefone: text (nullable)
//   empresa: text (nullable)
//   faturamento: text (nullable)
//   interesses: _text (nullable)
//   mensagem: text (nullable)
//   origem: text (nullable, default: 'site'::text)
//   utm_source: text (nullable)
//   utm_medium: text (nullable)
//   utm_campaign: text (nullable)
//   pagina_origem: text (nullable)
//   status: text (not null, default: 'novo'::text)
//   score: integer (nullable, default: 0)
//   anotacoes: text (nullable)
//   responsavel: text (nullable)
//   data_contato: timestamp with time zone (nullable)
//   data_proposta: timestamp with time zone (nullable)
//   data_fechamento: timestamp with time zone (nullable)
//   valor_estimado: numeric (nullable)
//   consentimento_lgpd: boolean (not null, default: false)
//   ip_hash: text (nullable)
// Table: page_views
//   id: uuid (not null, default: gen_random_uuid())
//   created_at: timestamp with time zone (not null, default: now())
//   pagina: text (nullable)
//   referrer: text (nullable)
//   user_agent: text (nullable)
//   sessao_hash: text (nullable)
// Table: vw_cta_performance
//   cta_id: text (nullable)
//   total_clicks: bigint (nullable)
//   clicks_7d: bigint (nullable)
//   clicks_24h: bigint (nullable)
// Table: vw_interesses
//   interesse: text (nullable)
//   total: bigint (nullable)
// Table: vw_leads_recentes
//   id: uuid (nullable)
//   created_at: timestamp with time zone (nullable)
//   nome: text (nullable)
//   email: text (nullable)
//   empresa: text (nullable)
//   faturamento: text (nullable)
//   interesses: _text (nullable)
//   score: integer (nullable)
//   status: text (nullable)
// Table: vw_pipeline
//   status: text (nullable)
//   total_leads: bigint (nullable)
//   score_medio: numeric (nullable)
//   valor_pipeline: numeric (nullable)
//   score_medio_qualificados: numeric (nullable)

// --- CONSTRAINTS ---
// Table: cta_clicks
//   PRIMARY KEY cta_clicks_pkey: PRIMARY KEY (id)
// Table: lead_events
//   FOREIGN KEY lead_events_lead_id_fkey: FOREIGN KEY (lead_id) REFERENCES leads(id) ON DELETE CASCADE
//   PRIMARY KEY lead_events_pkey: PRIMARY KEY (id)
// Table: leads
//   PRIMARY KEY leads_pkey: PRIMARY KEY (id)
//   CHECK leads_status_check: CHECK ((status = ANY (ARRAY['novo'::text, 'contatado'::text, 'em_proposta'::text, 'ganho'::text, 'perdido'::text, 'descartado'::text])))
// Table: page_views
//   PRIMARY KEY page_views_pkey: PRIMARY KEY (id)

// --- ROW LEVEL SECURITY POLICIES ---
// Table: cta_clicks
//   Policy "anon_insert_cta_clicks" (INSERT, PERMISSIVE) roles={anon}
//     WITH CHECK: true
//   Policy "service_all_cta_clicks" (ALL, PERMISSIVE) roles={service_role}
//     USING: true
//     WITH CHECK: true
// Table: lead_events
//   Policy "service_all_lead_events" (ALL, PERMISSIVE) roles={service_role}
//     USING: true
//     WITH CHECK: true
// Table: leads
//   Policy "anon_insert_leads" (INSERT, PERMISSIVE) roles={anon}
//     WITH CHECK: true
//   Policy "service_all_leads" (ALL, PERMISSIVE) roles={service_role}
//     USING: true
//     WITH CHECK: true
// Table: page_views
//   Policy "anon_insert_page_views" (INSERT, PERMISSIVE) roles={anon}
//     WITH CHECK: true
//   Policy "service_all_page_views" (ALL, PERMISSIVE) roles={service_role}
//     USING: true
//     WITH CHECK: true

// --- DATABASE FUNCTIONS ---
// FUNCTION calcular_score_lead()
//   CREATE OR REPLACE FUNCTION public.calcular_score_lead()
//    RETURNS trigger
//    LANGUAGE plpgsql
//    SET search_path TO 'public'
//   AS $function$
//   declare
//     pontos int := 0;
//   begin
//     if new.empresa is not null and new.empresa != '' then
//       pontos := pontos + 10;
//     end if;
//
//     if new.faturamento = 'Acima de R$ 100M' then pontos := pontos + 40;
//     elsif new.faturamento = 'R$ 20M – R$ 100M' then pontos := pontos + 30;
//     elsif new.faturamento = 'R$ 5M – R$ 20M'   then pontos := pontos + 20;
//     elsif new.faturamento = 'Até R$ 5M'         then pontos := pontos + 10;
//     end if;
//
//     if 'TAIE Enterprise'              = any(new.interesses) then pontos := pontos + 25; end if;
//     if 'Diagnóstico 360'              = any(new.interesses) then pontos := pontos + 20; end if;
//     if 'Monitoramento mensal'         = any(new.interesses) then pontos := pontos + 15; end if;
//     if 'Reforma Tributária (CBS/IBS)' = any(new.interesses) then pontos := pontos + 10; end if;
//
//     if new.mensagem is not null and length(new.mensagem) > 100 then
//       pontos := pontos + 10;
//     end if;
//
//     new.score := least(pontos, 100);
//     return new;
//   end;
//   $function$
//
// FUNCTION checar_rate_limit_lead()
//   CREATE OR REPLACE FUNCTION public.checar_rate_limit_lead()
//    RETURNS trigger
//    LANGUAGE plpgsql
//    SET search_path TO 'public'
//   AS $function$
//   declare
//     total_recente int;
//   begin
//     select count(*) into total_recente
//     from public.leads
//     where email = new.email
//       and created_at > now() - interval '1 hour';
//
//     if total_recente >= 5 then
//       raise exception 'rate_limit: muitos envios do mesmo email em curto período';
//     end if;
//
//     return new;
//   end;
//   $function$
//

// --- TRIGGERS ---
// Table: leads
//   trg_rate_limit_lead: CREATE TRIGGER trg_rate_limit_lead BEFORE INSERT ON public.leads FOR EACH ROW EXECUTE FUNCTION checar_rate_limit_lead()
//   trg_score_lead: CREATE TRIGGER trg_score_lead BEFORE INSERT OR UPDATE ON public.leads FOR EACH ROW EXECUTE FUNCTION calcular_score_lead()

// --- INDEXES ---
// Table: cta_clicks
//   CREATE INDEX cta_clicks_cta_id_idx ON public.cta_clicks USING btree (cta_id)
// Table: lead_events
//   CREATE INDEX lead_events_created_at_idx ON public.lead_events USING btree (created_at DESC)
//   CREATE INDEX lead_events_lead_id_idx ON public.lead_events USING btree (lead_id)
// Table: leads
//   CREATE INDEX leads_created_at_idx ON public.leads USING btree (created_at DESC)
//   CREATE INDEX leads_email_idx ON public.leads USING btree (email)
//   CREATE INDEX leads_score_idx ON public.leads USING btree (score DESC)
//   CREATE INDEX leads_status_idx ON public.leads USING btree (status)
// Table: page_views
//   CREATE INDEX page_views_created_at_idx ON public.page_views USING btree (created_at DESC)
//   CREATE INDEX page_views_pagina_idx ON public.page_views USING btree (pagina)
