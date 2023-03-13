const { Router } = require("express");
const {getAllTodos,getOneTodo,createNewTodo,deleteTodo,updateTodo} = require("../controllers/todo");

const router = Router();

/**
 * @URL : /item
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get all Todo data
 */
router.get("/", getAllTodos);

/**
 * @URL : /item/:id
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get one Todo data
 */
router.get("/:id", getOneTodo);

/**
 * @URL : /item
 * @Method : POST
 * @Status : PUBLIC
 * @Description : create one Todo data
 */
router.post("/", createNewTodo);

/**
 * @URL : /item/:id
 * @Method : DELETE
 * @Status : PUBLIC
 * @Description : delete one Todo data
 */
router.delete("/:id", deleteTodo);

/**
 * @URL : /item/:id
 * @Method : put
 * @Status : PUBLIC
 * @Description : update one Todo data
 */
router.put("/:id", updateTodo);
module.exports = router;