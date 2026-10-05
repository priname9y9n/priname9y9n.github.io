const SUPABASE_URL = "https://ateyjiapjsqmtpquxysz.supabase.co";
const SUPABASE_KEY = "sb_publishable_l1FvNqzeGmltHao55Zx2kg_9azE9Gyy";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );