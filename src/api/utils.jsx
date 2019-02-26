function updateProgress(evt) {
	if (evt.lengthComputable) {
		let percentComplete = (evt.loaded / evt.total) * 100
	}
}

function transferComplete(evt) {
	console.log("The transfer is complete.")
}

function transferFailed(evt) {
	console.error("An error occurred while transferring the file.")
}
export class ApiRequests {
	constructor() {
	}
	getHeaders() {
		return []
	}
	doPost(url, data, extraHeaders = {}, options = {}) {
		let headers = {
			...this.getHeaders(),
			...extraHeaders
		}
		return fetch(url, {
			method: 'POST',
			redirect: 'follow',
			credentials: options['mode'] && options['mode'] === 'cors' ? 'omit' : 'include',
			...options,
			headers: headers,
			body: data
		}).then((response) => response.json())
	}
	doDelete(url, extraHeaders = {}, options = {}) {
		let headers = {
			...this.getHeaders(),
			...extraHeaders
		}
		return fetch(url, {
			method: 'DELETE',
			redirect: 'follow',
			credentials: options['mode'] && options['mode'] === 'cors' ? 'omit' : 'include',
			...options,
			headers: headers
		}).then((response) => response.text())
	}
	doGet(url, extraHeaders = {}, options = {}) {
		let headers = {
			...this.getHeaders(),
			...extraHeaders
		}
		return fetch(url, {
			method: 'GET',
			credentials: options['mode'] && options['mode'] === 'cors' ? 'omit' : 'include',
			...options,
			headers: headers
		}).then((response) => response.json())
	}
	uploadWithProgress(url, data, resultFunc, progressFunc = updateProgress, loadFunc = transferComplete, errorFunc = transferFailed, ) {

		let xhr = new XMLHttpRequest()
		xhr.upload.addEventListener("progress", function (evt) {
			progressFunc(evt)
		}, false)
		xhr.addEventListener("load", function (evt) {
			loadFunc(xhr)
		})
		xhr.addEventListener("error", function () {
			errorFunc(xhr)
		})
		xhr.onreadystatechange = function () {
			if (xhr.readyState == XMLHttpRequest.DONE) {
				resultFunc(xhr.responseText)
			}
		}
		xhr.open('POST', url, true)
		xhr.setRequestHeader("Cache-Control", "no-cache")
		xhr.setRequestHeader('Authorization', `ApiKey ${this.username}:${this.token}`)
		xhr.send(data)

	}
}