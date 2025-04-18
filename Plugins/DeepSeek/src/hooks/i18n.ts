export const useI18nStore = () => {
  const language = window.argv[3].application.language;
  const localString = {
    en: {
      type: 'en',
      'Operation options': 'Operation options',
      newConversation: 'New Conversation',
      unNameed: 'Unnamed',
      typeYourMessage: 'Type your message...',
      send: 'Send',
      loading: 'Loading...',
      delete: 'delete',
      open: 'open',
      baseUrl: 'baseUrl',
      modelId: 'modelId',
      apiKey: 'apiKey',
      baseUrlInfo: "API base URL provided by the service provider",
      modelIdInfo: "Model ID activated",
      apiKeyInfo: "Key provided by the service provider",
      dataError: 'Please fill in the model call information',
      'API Parameter Retrieval Guide': 'Instructions for use',
      rename: 'rename',
      'addConversation': 'Enter a name for the new conversation:',
      'conversationExists': 'The conversation name already exists, please enter a new name.',
      confirmDelete: 'Delete Confirmation',
      confirmDeleteMessage: 'Are you sure you want to permanently delete this conversation?',
      confirm: 'confirm',
      cancel: 'Cancel',
      recordingTitle: 'recording',
      recordingTime: 'recordingTime',
      finish: 'Finish',
      audioAnalysis: 'audioAnalysis',
      audioAnalysisSuccess: 'Audio analysis success',
      audioAnalysisError: 'Audio analysis error',
      noAccessToMicrophone: 'No access to microphone',
      hexagramsTitle: 'Today\'s Fortune',
      hexagramsTips: 'For reference only',
      hexagramsInputTips: 'Please enter content',
      hexagramsSubmit: 'Divination',
    },
    zh_CN: {
      type: 'zh_CN',
      'Operation options': '操作选项',
      newConversation: '新建对话',
      unNameed: '未命名',
      typeYourMessage: '发送您的消息...',
      send: '发送',
      loading: '处理中...',
      delete: '删除',
      open: '打开',
      baseUrl: '服务器地址',
      modelId: '模型ID',
      apiKey: '验证令牌',
      baseUrlInfo: '服务商提供的api地址',
      modelIdInfo: '开通的模型ID',
      apiKeyInfo: '服务商提供的密钥',
      dataError: '请填写模型调用信息',
      'API Parameter Retrieval Guide': '使用指引',
      rename: '重命名',
      'addConversation': '为新的对话输入一个名称',
      'conversationExists': '对话名称已存在，请重新输入名称。',
      confirmDelete: '删除确认',
      confirmDeleteMessage: '确定要删除这个对话吗？',
      confirm: '确认',
      cancel: '取消',
      recordingTitle: '录音',
      recordingTime: '录音时间',
      finish: '完成',
      audioAnalysis: '音频解析',
      audioAnalysisSuccess: '音频解析成功',
      audioAnalysisError: '音频解析错误',
      noAccessToMicrophone: '无法访问麦克风',
      hexagramsTitle: '今日运势',
      hexagramsTips: '内容仅供参考',
      hexagramsInputTips: '请输入内容',
      hexagramsSubmit: '求卦',
    }
  };
  return localString[language] || localString['en'];
};
