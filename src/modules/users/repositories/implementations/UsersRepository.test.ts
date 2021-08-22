import * as UsersRepository from "./UsersRepository"
// @ponicode
describe("findUserWithGamesById", () => {
    let inst: any

    beforeEach(() => {
        inst = new UsersRepository.UsersRepository()
    })

    test("0", async () => {
        await inst.findUserWithGamesById({ user_id: "test_user" })
    })

    test("1", async () => {
        await inst.findUserWithGamesById({ user_id: "/people/%s/@self" })
    })

    test("2", async () => {
        await inst.findUserWithGamesById({ user_id: "someUser" })
    })

    test("3", async () => {
        await inst.findUserWithGamesById({ user_id: "fake_user" })
    })

    test("4", async () => {
        await inst.findUserWithGamesById({ user_id: "fake_user_id" })
    })

    test("5", async () => {
        await inst.findUserWithGamesById({ user_id: "" })
    })
})

// @ponicode
describe("findUserByFullName", () => {
    let inst: any

    beforeEach(() => {
        inst = new UsersRepository.UsersRepository()
    })

    test("0", async () => {
        await inst.findUserByFullName({ first_name: "Edmond", last_name: "Murray-Kynynmound" })
    })

    test("1", async () => {
        await inst.findUserByFullName({ first_name: "Pierre Edouard", last_name: "Al Saud" })
    })

    test("2", async () => {
        await inst.findUserByFullName({ first_name: "Edmond", last_name: "Baziz" })
    })

    test("3", async () => {
        await inst.findUserByFullName({ first_name: "Edmond", last_name: "Zong" })
    })

    test("4", async () => {
        await inst.findUserByFullName({ first_name: "Jean-Philippe", last_name: "Zong" })
    })

    test("5", async () => {
        await inst.findUserByFullName({ first_name: "", last_name: "" })
    })
})
