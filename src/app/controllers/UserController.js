import User from '../models/User';


class UserController {
 async store(req, res){
    try{
       const {id, name, photo, email} = req.body.userLogged;
      
       await User.create({
          id_google: id,
          name,
          photo,
          email
       })
       return res.json({message: 'Sucesso'})
    }catch(err){
       console.log(err)
    }
 }
}

export default new UserController();
