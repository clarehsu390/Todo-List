# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

todo1 = Todo.create(title: "Wash dishes", body: "with soap", done: false)
todo2 = Todo.create(title: "Do laundry", body: "use fabric softener", done: true)
todo3 = Todo.create(title: "Another one", body: "test", done: false)
