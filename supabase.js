import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://ctbllmwcjusrboivfmqf.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0YmxsbXdjanVzcmJvaXZmbXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1NjA0NTgsImV4cCI6MjAxOTEzNjQ1OH0.WGh68dgNaq-n6uP3GOeS6WgZFqk2FUAowFtRAyyhq1w";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)