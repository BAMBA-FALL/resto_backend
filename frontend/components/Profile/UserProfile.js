const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Appel à l'API pour récupérer les informations du profil utilisateur
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/profile');
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    };

    // Vérification de l'authentification de l'utilisateur
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (isAuthenticated) {
      fetchProfile();
    }
  }, [isAuthenticated]);

  // Fonction pour mettre à jour les informations du profil utilisateur
  const updateProfile = () => {
    // Récupération des nouvelles valeurs des champs à mettre à jour
    const { name, email } = useState({ name: userProfile.name, email: userProfile.email });

    // Appel à l'API pour mettre à jour les informations du profil utilisateur
    const updateProfileData = {
      name,
      email,
    };
    const updateProfileRequest = axios.put('http://localhost:4000/api/profile', updateProfileData);
    updateProfileRequest.then((response) => {
      setUserProfile(response.data);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      {userProfile ? (
        <View>
          <Text>Name: {userProfile.name}</Text>
          <Text>Email: {userProfile.email}</Text>
          <Button title="Mettre à jour le profil" onPress={updateProfile} />
          {/* Ajoutez d'autres champs du profil si nécessaire */}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};
