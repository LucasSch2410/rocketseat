
export function up(knex) { return knex.schema.createTable("tags", table => {
    table.increments("id");
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users");
    table.text("name");

})}

export function down(knex) { return knex.schema.dropTable("tags")}