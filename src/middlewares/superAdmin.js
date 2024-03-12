export const superAdmin = (req, res, next) => {
    try{
        if(req.tokenData.roleName !== 'super_admin') {
            return res.status(401).json(
                {
                    success: false,
                    message: "Unauthorized"
                }
            )
        }
        next();
    }catch (error){
        res.status(500).json(
            {
                success: false,
                message: "You dont have permisions"
            }
        )
    }
}