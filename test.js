//Comment mettre ne place un middleware 

/** 1) On aura besoin d'import en premier lieu la bibliothèque jwt
 * En suite le userModel puisqu'il s'agit de la vérification 
 */

/** 2) Après on vérifie si l'utilisateur s'est authentifie en vérifiant 
 * tout simplement l'entête de la requête, si tout se passe bien on continue la fonction, sinon 
 * on envoie un message d'erreur
 * 
 *  const authHeader = req.headers["Authorization"] : 
 * */

 /** 3) Si l'utilisateur est bien authentifié, alors on stocke le jeton qui se trouve dans le header 

 comme ceci 

 const token = authHeader.split('')[1], cela permet de ne garder que le token et sans le préfixe Bearer

**/


/** 4) Après on vérifie si le token a été bien généré par notre SECRET_KEY de notre application
 * 
 * if(error){
 * if(error.name === TokenExpired){
 * 
 * return res.send
 * }
 * }
 * par la méthode jwt.verify
 */


