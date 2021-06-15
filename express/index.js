import express from 'express';
import bp from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(bp.urlencoded({extended: true}));
app.use(bp.json());
app.use(morgan('dev'));

const db = [
    {id: 0, text: 'Go to the movies'},
    {id: 1, text: 'Eat a pizza.'},
    {id: 2, text: 'Pet sophie'},
    {id: 3, text: 'Do a flip'},
];

app.post('/todo', postTodo.bind(null, db));
app.get('/todo', getTodos.bind(null, db));
app.get('/todo/:id', getTodo.bind(null, db));

function postTodo(db, req, res) {
    const newTodo = {
        id: db.length,
        text: req.body.text
    };
    res.json(newTodo);
    db.push(newTodo);
}

function getTodo(db, req, res) {
    const todo = db.find(todo => todo.id === +req.params.id);
    console.log(todo)
    res.json(todo);
}

function getTodos(db, req, res) {
    res.json(db);
}

app.listen(8000, () => console.log('serving on http://localhost:8000'));


