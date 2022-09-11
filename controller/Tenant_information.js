const TenantData = require("../models/Tenant_information");
const tenatdata = require("../models/Tenant_information");

module.exports = {

    createData: async (req, res) => {
        // let query = {}
        // fyear = req.body.year;
        // fmonth = req.body.month
        

        // let query = await tenatdata.find({fyear,fmonth})
        // console.log(query);


        // return ;


        //    print(totole.Rent);
        // const year = req.query.year;



        // if (!query) {




            const myTenantData = await new tenatdata({

                userId: req.body.userId,
                year: req.body.year,
                month: req.body.month,
                Rent: req.body.Rent,
                previousDue: req.body.previousDue,
                electricUnit: req.body.electricUnit,
                totle: req.body.totle,
                deposit: req.body.deposit,
                nextMonthDue: req.body.nextMonthDue


            })

            try {


                const userss = await myTenantData.save();
                res.status(200).json({ message: "User Information Add Successfully", userss });


            } catch (e) {
                console.log(e);
            }
        // } else {
        //     res.send({ query, message: "Month And Year Already Exits" });
        // }


    },
    getData: async (req, res) => {
        const tyear = req.query.year;
        const tmonth = req.query.month;


        try {
            let getUserdata;

            if (tmonth) {

                getUserdata = await tenatdata.find({
                    userId: req.params.userId,month: {
                        $in: [tmonth]

                    }
                    ,year: {
                        $in: [tyear]


                    },
                    






                    
                })






            } else if (tmonth) {
                getUserdata = await tenatdata.find({
                    userId: req.params.userId, month: {
                        $in: [tmonth],









                 
                
                    }}) }
            else {
                getUserdata = await tenatdata.find({ userId: req.params.userId });
            }
            res.status(200).send(getUserdata);
        } catch (e) {
            console.log(e);
        }
    }
}