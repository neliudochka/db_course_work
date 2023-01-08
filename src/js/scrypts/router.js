const db = require('./config');
const express = require('express');
const router = express.Router();


//functions for Grant table
const getAllGrants = (req, res) => {
    const query = "SELECT * FROM mydb.Grant";
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};

const getGrant = (req, res) => {
    const query = `SELECT * FROM mydb.Grant WHERE id=${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json('No grant with such id');
        res.status(200).json(result);
    });
};

const addGrant = (req, res) => {
    const newSlug = req.body.slug;
    console.log(newSlug);
    
    if (!(newSlug))
        return res
        .status(400)
        .json({ message: "Slug is requiredd" });

    const queryToFindGrant = `SELECT * FROM mydb.Grant WHERE slug="${newSlug}"`;
    db.query(queryToFindGrant, (err, result) =>     {
        if (err) return res.status(500).json(err);
        if (result.length !== 0) return res.status(406).json({ message: 'There is already this grant'});

        const query = "INSERT INTO mydb.Grant SET ?";
        const grant = {
            "slug": newSlug
        }
        console.log(grant)
        db.query(query, grant, (err) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ message: "New grant created" });
        });
    });
};

const deleteSlug = (req, res) => {
    const query = `DELETE FROM mydb.Grant WHERE id=${req.params.id}`;
    db.query(`SELECT * FROM mydb.Grant WHERE id=${req.params.id}`, (err, result) =>{
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json('No grant with this id');
      db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "grant deleted" });
      });
      });
};

//functions for Role table
const getAllRoles = (req, res) => {
    const query = "SELECT * FROM mydb.Role";
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};

const getRole = (req, res) => {
    const query = `SELECT * FROM mydb.Role WHERE id=${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json('No role with such id');
        res.status(200).json(result);
    });
};

const addRole = (req, res) => {
    const newSlug = req.body.slug;
    console.log(newSlug);
    
    if (!(newSlug))
        return res
        .status(400)
        .json({ message: "Slug is requiredd" });

    const queryToFindRole = `SELECT * FROM mydb.Role WHERE slug="${newSlug}"`;
    db.query(queryToFindRole, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length !== 0) return res.status(406).json({ message: 'There is already this role'});

        const query = "INSERT INTO mydb.Role SET ?";
        const role = {
            "slug": newSlug
        }
        console.log(role)
        db.query(query, role, (err) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ message: "New role created" });
        });
    });
};

const deleteRole = (req, res) => {
    const query = `DELETE FROM mydb.Role WHERE id=${req.params.id}`;
    db.query(`SELECT * FROM mydb.Role WHERE id=${req.params.id}`, (err, result) =>{
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json('No role with such id');
      db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "role deleted" });
      });
      });
};

//functions for RoleGrant table
const getAllRoleGrant = (req, res) => {
    const query = 
    `SELECT mydb.RoleGrant.Role_id, mydb.Role.slug as Role_slug, mydb.RoleGrant.Grant_id, mydb.Grant.slug as Grant_slug
    FROM mydb.RoleGrant
    JOIN mydb.Role ON mydb.RoleGrant.Role_id = mydb.Role.id
    JOIN mydb.Grant ON mydb.RoleGrant.Grant_id = mydb.Grant.id;`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};

const getRoleGrant = (req, res) => {
    const query = 
    `SELECT mydb.RoleGrant.Role_id, mydb.Role.slug as Role_slug, mydb.RoleGrant.Grant_id, mydb.Grant.slug as Grant_slug
    FROM mydb.RoleGrant
    JOIN mydb.Role ON mydb.RoleGrant.Role_id = mydb.Role.id
    JOIN mydb.Grant ON mydb.RoleGrant.Grant_id = mydb.Grant.id
    WHERE mydb.Role.id=${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};

const addRoleGrant = (req, res) => {
    const {Role_slug, Grant_slug} = req.body;

    if(!(Role_slug && Grant_slug)){
    return res
    .status(400)
    .json({ message: "Role_slug and grant are required" });
    }
    //if role exists
    const queryToFindRole= `SELECT * FROM mydb.Role WHERE mydb.Role.slug="${Role_slug}"`;
    db.query(queryToFindRole, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json('No such role in the Role table');
        const Role_id = result[0].id;

        //if grant exists
        const queryToFindGrant= `SELECT * FROM mydb.Grant WHERE mydb.Grant.slug="${Grant_slug}"`;
        db.query(queryToFindGrant, (err, result) => {
            if (err) return res.status(500).json(err);
            if (result.length === 0) return res.status(404).json('No such grant in the Grant table');
            const Grant_id = result[0].id;
            //if such pair exists
            const queryToFindRoleGrant =
            `SELECT mydb.RoleGrant.Role_id, mydb.RoleGrant.Grant_id
            FROM mydb.RoleGrant
            WHERE mydb.RoleGrant.Role_id=${Role_id} AND mydb.RoleGrant.Grant_id=${Grant_id};`
            db.query(queryToFindRoleGrant, (err, result) => {
                if (err) return res.status(500).json(err);
                if (result.length != 0) return res.status(404).json('Such pair already exist');
                //finally
                const query = 
                `INSERT INTO mydb.RoleGrant (Role_id, Grant_id)
                VALUES ( ${Role_id},${Grant_id});`;
                db.query(query, (err, result) => {
                    if (err) return res.status(500).json(err);
                    res.status(201).json({ message: "New pair of Role-Grant created" });
                });
            });
        });
    });
};

const deleteRoleGrant = (req, res) => {
    const {Role_slug, Grant_slug} = req.body;

    if(!(Role_slug && Grant_slug)){
    return res
    .status(400)
    .json({ message: "Role_slug and grant are required" });
    }
    //if role exists
    const queryToFindRole= `SELECT * FROM mydb.Role WHERE mydb.Role.slug="${Role_slug}"`;
    db.query(queryToFindRole, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json('No such role in the Role table');
        const Role_id = result[0].id;

        //if grant exists
        const queryToFindGrant= `SELECT * FROM mydb.Grant WHERE mydb.Grant.slug="${Grant_slug}"`;
        db.query(queryToFindGrant, (err, result) => {
            if (err) return res.status(500).json(err);
            if (result.length === 0) return res.status(404).json('No such grant in the Grant table');
            const Grant_id = result[0].id;
            //if such pair exists
            const queryToFindRoleGrant =
            `SELECT mydb.RoleGrant.Role_id, mydb.RoleGrant.Grant_id
            FROM mydb.RoleGrant
            WHERE mydb.RoleGrant.Role_id=${Role_id} AND mydb.RoleGrant.Grant_id=${Grant_id};`;
            db.query(queryToFindRoleGrant, (err, result) => {
                if (err) return res.status(500).json(err);
                if (result.length === 0) return res.status(404).json('No such pair');
                //finally
                const query = 
                `DELETE FROM mydb.RoleGrant
                WHERE mydb.RoleGrant.Role_id=${Role_id} AND mydb.RoleGrant.Grant_id=${Grant_id};`;
                db.query(query, (err, result) => {
                    if (err) return res.status(500).json(err);
                    res.status(201).json({ message: "Pair deleted" });
                });
            });
        });
    });
};

const checkRoleGrantBody = (req, res) => {
    const {Role_slug, Grant_slug} = req.body;

    if(!(Role_slug && Grant_slug)){
    return res
    .status(400)
    .json({ message: "Role_slug and grant are required" });
    }
    //if role exists
    const queryToFindRole= `SELECT * FROM mydb.Role WHERE mydb.Role.slug="${Role_slug}"`;
    db.query(queryToFindRole, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json('No such role in the Role table');
        const Role_id = result[0].id;

        //if grant exists
        const queryToFindGrant= `SELECT * FROM mydb.Grant WHERE mydb.Grant.slug="${Grant_slug}"`;
        db.query(queryToFindGrant, (err, result) => {
            if (err) return res.status(500).json(err);
            if (result.length === 0) return res.status(404).json('No such grant in the Grant table');
            const Grant_id = result[0].id;
            //if such pair exists
            const queryToFindRoleGrant =
            `SELECT mydb.RoleGrant.Role_id, mydb.RoleGrant.Grant_id
            FROM mydb.RoleGrant
            WHERE mydb.RoleGrant.Role_id=${Role_id} AND mydb.RoleGrant.Grant_id=${Grant_id};`
            db.query(queryToFindRoleGrant, (err, result) => {
                if (err) return res.status(500).json(err);
                return {Role_id, Grant_id};
            });
        });
    });
    return false;
};

//grant
router
    .get("/Grant", getAllGrants)
    .get("/Grant/:id", getGrant)
    .post("/Grant", addGrant)
    .delete("/Grant/:id", deleteSlug);

//role
router
    .get("/Role", getAllRoles)
    .get("/Role/:id", getRole)
    .post("/Role", addRole)
    .delete("/Role/:id", deleteRole);

//rolegrant
router
    .get("/RoleGrant", getAllRoleGrant)
    .get("/RoleGrant/:id", getRoleGrant)
    .post("/RoleGrant", addRoleGrant)
    .delete("/RoleGrant", deleteRoleGrant);

module.exports = router;