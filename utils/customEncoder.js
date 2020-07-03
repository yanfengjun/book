/**
 * by: lee
 * 编码解码
 */
export default {
	encodeKey: function(key) {
		return encodeURIComponent(key);
	}

	encodeValue: function(value) {
		return encodeURIComponent(value);
	}

	decodeKey: function(key) {
		return decodeURIComponent(key);
	}

	decodeValue: function(value) {
		return decodeURIComponent(value);
	}
}
