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
      rate_limit_log: {
        Row: {
          chave: string
          created_at: string
          id: string
          operacao: string
        }
        Insert: {
          chave: string
          created_at?: string
          id?: string
          operacao: string
        }
        Update: {
          chave?: string
          created_at?: string
          id?: string
          operacao?: string
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
      checar_rate_limit: {
        Args: { p_email?: string; p_ip?: string; p_operacao: string }
        Returns: undefined
      }
      hash_valor: { Args: { valor: string }; Returns: string }
      limpar_rate_limit_log: { Args: never; Returns: undefined }
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
// Table: rate_limit_log
//   id: uuid (not null, default: gen_random_uuid())
//   chave: text (not null)
//   operacao: text (not null)
//   created_at: timestamp with time zone (not null, default: now())
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
// Table: rate_limit_log
//   PRIMARY KEY rate_limit_log_pkey: PRIMARY KEY (id)

// --- ROW LEVEL SECURITY POLICIES ---
// Table: cta_clicks
//   Policy "anon_insert_cta_clicks_seguro" (INSERT, PERMISSIVE) roles={anon}
//     WITH CHECK: ((cta_id IS NOT NULL) AND (cta_id = ANY (ARRAY['hero_diagnostico'::text, 'hero_cases'::text, 'contact_cta'::text, 'services_cta'::text, 'about_cta'::text, 'footer_cta'::text, 'sticky_cta'::text, 'diagnostico_form_open'::text])) AND ((sessao_hash IS NULL) OR (length(sessao_hash) = 64)))
//   Policy "deny_anon_select_cta_clicks" (SELECT, PERMISSIVE) roles={anon}
//     USING: false
//   Policy "service_all_cta_clicks" (ALL, PERMISSIVE) roles={service_role}
//     USING: true
//     WITH CHECK: true
// Table: lead_events
//   Policy "deny_anon_all_lead_events" (ALL, PERMISSIVE) roles={anon}
//     USING: false
//   Policy "service_all_lead_events" (ALL, PERMISSIVE) roles={service_role}
//     USING: true
//     WITH CHECK: true
// Table: leads
//   Policy "anon_insert_leads_seguro" (INSERT, PERMISSIVE) roles={anon}
//     WITH CHECK: ((nome IS NOT NULL) AND (length(TRIM(BOTH FROM nome)) >= 2) AND (email IS NOT NULL) AND (email ~* '^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}'::text) AND (consentimento_lgpd = true) AND ((status IS NULL) OR (status = 'novo'::text)) AND ((origem IS NULL) OR (origem = 'site'::text)) AND (score IS NULL) AND (valor_estimado IS NULL) AND (responsavel IS NULL) AND (anotacoes IS NULL) AND (data_contato IS NULL) AND (data_proposta IS NULL) AND (data_fechamento IS NULL) AND ((nome IS NULL) OR (length(nome) <= 200)) AND ((empresa IS NULL) OR (length(empresa) <= 200)) AND ((mensagem IS NULL) OR (length(mensagem) <= 5000)) AND ((telefone IS NULL) OR (length(telefone) <= 30)))
//   Policy "deny_anon_delete_leads" (DELETE, PERMISSIVE) roles={anon}
//     USING: false
//   Policy "deny_anon_select_leads" (SELECT, PERMISSIVE) roles={anon}
//     USING: false
//   Policy "deny_anon_update_leads" (UPDATE, PERMISSIVE) roles={anon}
//     USING: false
//   Policy "service_all_leads" (ALL, PERMISSIVE) roles={service_role}
//     USING: true
//     WITH CHECK: true
// Table: page_views
//   Policy "anon_insert_page_views_seguro" (INSERT, PERMISSIVE) roles={anon}
//     WITH CHECK: (((pagina IS NULL) OR ((pagina ~~ '/%'::text) AND (length(pagina) <= 500))) AND ((referrer IS NULL) OR (length(referrer) <= 500)) AND ((sessao_hash IS NULL) OR (length(sessao_hash) = 64)) AND ((user_agent IS NULL) OR (length(user_agent) <= 1000)))
//   Policy "deny_anon_select_page_views" (SELECT, PERMISSIVE) roles={anon}
//     USING: false
//   Policy "service_all_page_views" (ALL, PERMISSIVE) roles={service_role}
//     USING: true
//     WITH CHECK: true
// Table: rate_limit_log
//   Policy "service_all_rate_limit_log" (ALL, PERMISSIVE) roles={service_role}
//     USING: true
//     WITH CHECK: true

// --- DATABASE FUNCTIONS ---
// FUNCTION anonimizar_page_view()
//   CREATE OR REPLACE FUNCTION public.anonimizar_page_view()
//    RETURNS trigger
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//    SET search_path TO 'public'
//   AS $function$
//   DECLARE
//     v_ua     text := NEW.user_agent;
//     v_browser text := 'Desconhecido';
//     v_os      text := 'Desconhecido';
//   BEGIN
//     -- Detecta browser (ordem importa — Edge antes de Chrome)
//     IF v_ua ILIKE '%Edg/%'          THEN v_browser := 'Edge';
//     ELSIF v_ua ILIKE '%Chrome/%'    THEN v_browser := 'Chrome';
//     ELSIF v_ua ILIKE '%Firefox/%'   THEN v_browser := 'Firefox';
//     ELSIF v_ua ILIKE '%Safari/%'    THEN v_browser := 'Safari';
//     ELSIF v_ua ILIKE '%OPR/%'       THEN v_browser := 'Opera';
//     ELSIF v_ua ILIKE '%bot%'
//        OR v_ua ILIKE '%crawler%'
//        OR v_ua ILIKE '%spider%'     THEN v_browser := 'Bot';
//     END IF;
//
//     -- Detecta SO
//     IF v_ua ILIKE '%Windows NT%'    THEN v_os := 'Windows';
//     ELSIF v_ua ILIKE '%Macintosh%'  THEN v_os := 'macOS';
//     ELSIF v_ua ILIKE '%Android%'    THEN v_os := 'Android';
//     ELSIF v_ua ILIKE '%iPhone%'
//        OR v_ua ILIKE '%iPad%'       THEN v_os := 'iOS';
//     ELSIF v_ua ILIKE '%Linux%'      THEN v_os := 'Linux';
//     END IF;
//
//     -- Substitui user_agent completo pela versão anonimizada
//     NEW.user_agent := v_browser || ' / ' || v_os;
//
//     RETURN NEW;
//   END;
//   $function$
//
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
// FUNCTION checar_rate_limit(text, text, text)
//   CREATE OR REPLACE FUNCTION public.checar_rate_limit(p_operacao text, p_email text DEFAULT NULL::text, p_ip text DEFAULT NULL::text)
//    RETURNS void
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//    SET search_path TO 'public'
//   AS $function$
//   DECLARE
//     v_limite_email int;
//     v_limite_ip    int;
//     v_janela       interval;
//     v_count_email  int := 0;
//     v_count_ip     int := 0;
//     v_email_hash   text;
//     v_ip_hash      text;
//   BEGIN
//     -- Configura limites por operação
//     CASE p_operacao
//       WHEN 'lead_insert' THEN
//         v_limite_email := 3;
//         v_limite_ip    := 10;
//         v_janela       := interval '1 hour';
//       WHEN 'cta_click' THEN
//         v_limite_email := NULL;  -- sem limite por email para cliques
//         v_limite_ip    := 50;
//         v_janela       := interval '1 hour';
//       WHEN 'page_view' THEN
//         v_limite_email := NULL;
//         v_limite_ip    := 200;
//         v_janela       := interval '1 hour';
//       ELSE
//         v_limite_email := 5;
//         v_limite_ip    := 20;
//         v_janela       := interval '1 hour';
//     END CASE;
//
//     -- Checa rate limit por email (se aplicável)
//     IF p_email IS NOT NULL AND v_limite_email IS NOT NULL THEN
//       v_email_hash := public.hash_valor(p_email);
//
//       SELECT count(*) INTO v_count_email
//       FROM public.rate_limit_log
//       WHERE chave     = 'email:' || v_email_hash
//         AND operacao  = p_operacao
//         AND created_at > now() - v_janela;
//
//       IF v_count_email >= v_limite_email THEN
//         RAISE EXCEPTION 'rate_limit: limite de envios por email atingido. Aguarde antes de tentar novamente.';
//       END IF;
//
//       -- Registra o evento por email
//       INSERT INTO public.rate_limit_log (chave, operacao)
//       VALUES ('email:' || v_email_hash, p_operacao);
//     END IF;
//
//     -- Checa rate limit por IP (se fornecido)
//     IF p_ip IS NOT NULL AND v_limite_ip IS NOT NULL THEN
//       v_ip_hash := public.hash_valor(p_ip);
//
//       SELECT count(*) INTO v_count_ip
//       FROM public.rate_limit_log
//       WHERE chave     = 'ip:' || v_ip_hash
//         AND operacao  = p_operacao
//         AND created_at > now() - v_janela;
//
//       IF v_count_ip >= v_limite_ip THEN
//         RAISE EXCEPTION 'rate_limit: muitas requisições do mesmo IP. Aguarde antes de tentar novamente.';
//       END IF;
//
//       -- Registra o evento por IP
//       INSERT INTO public.rate_limit_log (chave, operacao)
//       VALUES ('ip:' || v_ip_hash, p_operacao);
//     END IF;
//   END;
//   $function$
//
// FUNCTION checar_rate_limit_cta()
//   CREATE OR REPLACE FUNCTION public.checar_rate_limit_cta()
//    RETURNS trigger
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//    SET search_path TO 'public'
//   AS $function$
//   BEGIN
//     IF NEW.sessao_hash IS NOT NULL THEN
//       PERFORM public.checar_rate_limit(
//         'cta_click',
//         NULL,
//         NEW.sessao_hash
//       );
//     END IF;
//     RETURN NEW;
//   END;
//   $function$
//
// FUNCTION checar_rate_limit_lead()
//   CREATE OR REPLACE FUNCTION public.checar_rate_limit_lead()
//    RETURNS trigger
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//    SET search_path TO 'public'
//   AS $function$
//   BEGIN
//     -- Rate limit por email (3/h) — bloqueia submissões repetidas do mesmo email
//     PERFORM public.checar_rate_limit(
//       'lead_insert',
//       NEW.email,
//       NEW.ip_hash  -- ip_hash já deve vir como hash do frontend (não o IP real)
//     );
//
//     RETURN NEW;
//   END;
//   $function$
//
// FUNCTION hash_valor(text)
//   CREATE OR REPLACE FUNCTION public.hash_valor(valor text)
//    RETURNS text
//    LANGUAGE sql
//    IMMUTABLE SECURITY DEFINER
//    SET search_path TO 'public', 'extensions'
//   AS $function$
//     -- Troque 'mathops-salt-2024' por um valor aleatório e guarde no vault
//     SELECT encode(
//       extensions.digest('mathops-salt-2024' || lower(trim(valor)), 'sha256'),
//       'hex'
//     );
//   $function$
//
// FUNCTION limpar_rate_limit_log()
//   CREATE OR REPLACE FUNCTION public.limpar_rate_limit_log()
//    RETURNS void
//    LANGUAGE plpgsql
//    SECURITY DEFINER
//    SET search_path TO 'public'
//   AS $function$
//   BEGIN
//     DELETE FROM public.rate_limit_log
//     WHERE created_at < now() - interval '24 hours';
//   END;
//   $function$
//

// --- TRIGGERS ---
// Table: cta_clicks
//   trg_rate_limit_cta: CREATE TRIGGER trg_rate_limit_cta BEFORE INSERT ON public.cta_clicks FOR EACH ROW EXECUTE FUNCTION checar_rate_limit_cta()
// Table: leads
//   trg_rate_limit_lead: CREATE TRIGGER trg_rate_limit_lead BEFORE INSERT ON public.leads FOR EACH ROW EXECUTE FUNCTION checar_rate_limit_lead()
//   trg_score_lead: CREATE TRIGGER trg_score_lead BEFORE INSERT OR UPDATE ON public.leads FOR EACH ROW EXECUTE FUNCTION calcular_score_lead()
// Table: page_views
//   trg_anonimizar_page_view: CREATE TRIGGER trg_anonimizar_page_view BEFORE INSERT ON public.page_views FOR EACH ROW EXECUTE FUNCTION anonimizar_page_view()

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
// Table: rate_limit_log
//   CREATE INDEX rate_limit_log_chave_op_idx ON public.rate_limit_log USING btree (chave, operacao, created_at DESC)
//   CREATE INDEX rate_limit_log_cleanup_idx ON public.rate_limit_log USING btree (created_at DESC)
