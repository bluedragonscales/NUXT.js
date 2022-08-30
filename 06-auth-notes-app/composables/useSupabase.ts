import { createClient } from '@supabase/supabase-js';


const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1cHp0dnNhc3dxemRucXZmaWFjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTgwNzY5MywiZXhwIjoxOTc3MzgzNjkzfQ.f3u5W065XMzw4mI9_EucrQHaq4VRLh66gKs37Q_Fr8U";

const SUPABASE_URL = 'https://qupztvsaswqzdnqvfiac.supabase.co';

const useSupabase = () => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

    return {supabase};
};


export default useSupabase;

