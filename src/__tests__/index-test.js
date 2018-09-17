import preset from '../'

describe('babel-preset-nodely', () => {
  let api

  beforeEach(() => {
    api = {
      cache: {
        never: jest.fn(),
      },
    }
  })

  it('should export a function', () => {
    expect(preset).toBeInstanceOf(Function)
  })

  describe('when no options provided', () => {
    let result

    beforeEach(() => {
      result = preset(api)
    })

    it('should never cache config', () => {
      expect(api.cache.never).toHaveBeenCalled()
    })

    it('should provide expected config', () => {
      expect(result).toMatchSnapshot()
    })
  })

  describe('when loose is set to true', () => {
    let result

    beforeEach(() => {
      result = preset(api, {loose: true})
    })

    it('should never cache config', () => {
      expect(api.cache.never).toHaveBeenCalled()
    })

    it('should provide expected config', () => {
      expect(result).toMatchSnapshot()
    })
  })

  describe('when loose is set to false', () => {
    let result

    beforeEach(() => {
      result = preset(api, {loose: false})
    })

    it('should never cache config', () => {
      expect(api.cache.never).toHaveBeenCalled()
    })

    it('should provide expected config', () => {
      expect(result).toMatchSnapshot()
    })
  })

  describe('when node targets passed in', () => {
    let result

    beforeEach(() => {
      result = preset(api, {
        targets: {
          node: '6',
        },
      })
    })

    it('should never cache config', () => {
      expect(api.cache.never).toHaveBeenCalled()
    })

    it('should provide expected config', () => {
      expect(result).toMatchSnapshot()
    })
  })

  describe('when node targets passed in and loose set to false', () => {
    let result

    beforeEach(() => {
      result = preset(api, {
        loose: false,
        targets: {
          node: '6',
        },
      })
    })

    it('should never cache config', () => {
      expect(api.cache.never).toHaveBeenCalled()
    })

    it('should provide expected config', () => {
      expect(result).toMatchSnapshot()
    })
  })

  describe('when browser targets passed in', () => {
    let result

    beforeEach(() => {
      result = preset(api, {
        targets: {
          browsers: ['last 2 versions', 'ie10'],
        },
      })
    })

    it('should never cache config', () => {
      expect(api.cache.never).toHaveBeenCalled()
    })

    it('should provide expected config', () => {
      expect(result).toMatchSnapshot()
    })
  })
})
