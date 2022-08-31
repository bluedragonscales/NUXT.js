const useAuth = () => {
    const user = useState('user', () => null);
    const {supabase} = useSupabase();

    supabase.auth.onAuthStateChange((ev, session) => {
        user.value = session?.user || null;
    });


    const signUp = async ({email, password, ...metadata}) => {
        const {user: u, error} = await supabase.auth.signUp({
            email,
            password
        }, {
            data: metadata,
            redirectTo: `${window.location.origin}/profile?source=email`
        });

        if(error) throw error;
        else return u;
    };


    const logIn = async ({email, password}) => {
        const {user: u, error} = await supabase.auth.signIn({
            email, password
        });

        if(error) throw error;
        else return u;
    };


    const logOut = async () => {
        const {error} = await supabase.auth.signOut();

        if(error) throw error;
    };


    return {
        user,
        signUp,
        logIn,
        logOut
    };
};

export default useAuth;