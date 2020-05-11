import mongo from 'mongoose'

const schema = new mongo.Schema({

    vendedor: { type: String, required: [ true, 'This is foo' ] },
    addedAt: { type: Date, default: Date.now }

}, { collection: 'foos' })

export const FooModel = mongo.model( 'Foo', schema )