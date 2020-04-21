import { EventEmitter } from 'events'

export const emitter = new EventEmitter()

export const messages = {
  COMMAND_NOT_FOUND: '指令未找到。',
  LOW_AUTHORITY: '权限不足。',
  TOO_FREQUENT: '调用过于频繁，请稍后再试。',
  INSUFFICIENT_ARGUMENTS: '缺少参数，请检查指令语法。',
  REDUNANT_ARGUMENTS: '存在多余参数，请检查指令语法。',
  REQUIRED_OPTIONS: '缺少必需选项 %s，请检查指令语法。',
  INVALID_OPTION: '选项 %s 输入无效，%s',
  UNKNOWN_OPTIONS: '存在未知选项 %s，请检查指令语法。',
  CHECK_SYNTAX: '请检查指令语法。',
  SHOW_THIS_MESSAGE: '显示本信息',
  USAGE_EXHAUSTED: '调用次数已达上限。',
  COMMAND_SUGGESTION_PREFIX: '没有此命令。',
  COMMAND_SUGGESTION_SUFFIX: '发送空行或句号以调用推测的指令。',
  SUGGESTION_TEXT: '你要找的是不是%s？',
} as const

export const errors = {
  DUPLICATE_COMMAND: 'duplicate command names: "%s"',
  DUPLICATE_OPTION: 'duplicate option names: "%s"',
  EXPECT_COMMAND_NAME: 'expect a command name',
  INVALID_PLUGIN: 'invalid plugin, expect function or object with a "apply" method',
  INVALID_CONTEXT: 'invalid context path',
  INVALID_IDENTIFIER: 'invalid context identifier',
  INVALID_SUBCOMMAND: 'invalid subcommand',
  ISOLATED_NEXT: 'isolated next function detected',
  UNSUPPORTED_SERVER_TYPE: 'unsupported server type, expect "http" or "ws"',
  MISSING_CONFIGURATION: 'missing configuration "%s"',
  MAX_MIDDLEWARES: 'max middleware count (%d) exceeded, which may be caused by a memory leak',
  UNSUPPORTED_CQHTTP_VERSION: 'your cqhttp version is not compatible with koishi, please upgrade your cqhttp to 3.0 or above',
  MULTIPLE_ANONYMOUS_BOTS: 'your cqhttp version does not support multiple anonymous bots, please upgrade your cqhttp to 3.4 or above',
} as const