import {makeAutoObservable} from "mobx";

export default class AnswerStore {
    constructor() {
        this._answers = []
        this._page = 1
        this._totalCount = 0
        this._limit = 4
        this._selectedOrder = 'ASC'
        makeAutoObservable(this)
    }

    setAnswers(answers) {
        this._answers = answers
    }
    setSelectedOrder(order) {
        this.setPage(1)
        this._selectedOrder = order
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get answers() {
        return this._answers
    }
    get selectedOrder() {
        return this._selectedOrder
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
 
}