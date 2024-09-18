import FeedbackItem from './FeedbackItem';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';
import { useFeedbackItemsContext } from '../../lib/hooks';

export default function FeedbackList() {
  const { isLoading, errorMessage, filteredFeedbackItems } = useFeedbackItemsContext();

  return (
    <ol className='feedback-list'>
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {filteredFeedbackItems.map((feedbackitem) => (
        <FeedbackItem key={feedbackitem.id} feedbackItem={feedbackitem} />
      ))}
    </ol>
  );
}
