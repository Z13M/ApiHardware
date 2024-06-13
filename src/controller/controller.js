import bd from "../config/db.js";

export const getAll = (req, res) => {
    bd.query('select * from componentes', (err,result) => {
        if(err) throw err
        res.send(result)
    })
};

export const getName = (req, res) => {
    bd.query('SELECT nome_componente FROM componentes', (err,result) => {
        if(err) throw err
        res.send(result)
    })
};

export const getCompbyId = (req, res) => {
    const {id} = req.params;
    bd.query('SELECT * FROM componentes WHERE codigo_componente = ?', [id], (err,result) => {
        if(err) throw err;
        res.send(result);
    })
};

export const getCompName = (req, res) => {
    const { nome } = req.params;
    bd.query('select * from componentes where nome_componente like ?',[ `%${nome}%` ], (err,result) => {
        if(err) throw err;
        res.send(result);
    })
};

export const addComp = (req,res) => {
    const { nome_componente, desc_componente } = req.body;
    if(!nome_componente){
        res.send("NENHUM VALOR FOI ADICIONADO!!!")
    }else{
    bd.query('INSERT INTO componentes (nome_componente , desc_componente) VALUES (?, ?)',
    [nome_componente, desc_componente], (err,result) => {
        if(err) throw err;
        res.send({nome_componente, desc_componente})
        })
    };
};

export const removeComp = (req,res) => {
    const {id} = req.params;

    bd.query('SELECT * FROM componentes WHERE codigo_componente = ?', [id], (err,results) => {

        if(!results.length) {
            res.send("HARDWARE NOT FOUND IN DATABASE!! COULD NOT REMOVE!!");
        } else 
       { bd.query('DELETE FROM componentes WHERE codigo_componente = ?',[id], (err,results) => {
            if(err) throw err;
            res.send("HARDWARE REMOVE FROM DATABASE!!!")
        })}
    });

};

export const updateComp = (req,res) => {
    const { id } = req.params;
    const { nome_componente } = req.body;

    bd.query('SELECT * FROM componentes WHERE codigo_componente = ?', [id], (error,results) => {
        if(!results.length) {
            res.send("HARDWARE NOT FOUND IN DATABASE!");
        }else{
            bd.query('UPDATE componentes SET nome_componente = ? WHERE codigo_componente = ?', [nome_componente, id], (err,results) => {
                if(err) throw err;
                res.send("HARDWARE UPDATED SUCCESSFULLY");
            })
        }
    });
};
